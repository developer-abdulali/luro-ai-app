"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBook = exports.GetSingleBook = exports.ListBooks = exports.UpdateBook = exports.CreateBook = void 0;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const bookModel_1 = __importDefault(require("../book/bookModel"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const http_errors_1 = __importDefault(require("http-errors"));
const CreateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, genre, description } = req.body;
    const files = req.files;
    // Check if cover image and book file are present
    if (!files.coverImage || !files.file) {
        return next((0, http_errors_1.default)(400, "Cover image and book file are required."));
    }
    const coverImageFile = files.coverImage[0];
    const bookFile = files.file[0];
    const coverImageMimeType = coverImageFile.mimetype.split("/").pop();
    const coverImageFileName = coverImageFile.filename;
    const coverImageFilePath = node_path_1.default.resolve(__dirname, "../../public/data/uploads", coverImageFileName);
    try {
        const uploadResult = yield cloudinary_1.default.uploader.upload(coverImageFilePath, {
            filename_override: coverImageFileName,
            folder: "book-covers",
            format: coverImageMimeType,
        });
        const bookFileName = bookFile.filename;
        const bookFilePath = node_path_1.default.resolve(__dirname, "../../public/data/uploads", bookFileName);
        let bookFileUploadResult = yield cloudinary_1.default.uploader.upload(bookFilePath, {
            resource_type: "raw",
            filename_override: bookFileName,
            folder: "book-pdfs",
            format: "pdf",
        });
        const _req = req;
        const newBook = yield bookModel_1.default.create({
            title,
            genre,
            description,
            author: _req.userId,
            coverImage: uploadResult.secure_url,
            file: bookFileUploadResult.secure_url,
        });
        // Delete temporary files
        try {
            yield node_fs_1.default.promises.unlink(coverImageFilePath);
            yield node_fs_1.default.promises.unlink(bookFilePath);
        }
        catch (unlinkErr) {
            console.error("Error deleting temporary files:", unlinkErr);
        }
        res
            .status(201)
            .json({ id: newBook._id, message: "Book is created successfully" });
    }
    catch (err) {
        console.error(err);
        return next((0, http_errors_1.default)(500, "Error while uploading the files."));
    }
});
exports.CreateBook = CreateBook;
const UpdateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, genre, description } = req.body;
    const bookId = req.params.bookId;
    try {
        const book = yield bookModel_1.default.findById(bookId);
        if (!book) {
            return next((0, http_errors_1.default)(404, "Book not found"));
        }
        // Check access
        const _req = req;
        if (book.author.toString() !== _req.userId) {
            return next((0, http_errors_1.default)(403, "You cannot update others' book."));
        }
        const files = req.files;
        let completeCoverImage = book.coverImage;
        if (files.coverImage && files.coverImage[0]) {
            const filename = files.coverImage[0].filename;
            const coverMimeType = files.coverImage[0].mimetype.split("/").at(-1);
            const coverImagePath = node_path_1.default.resolve(__dirname, "../../public/data/uploads", filename);
            const uploadResult = yield cloudinary_1.default.uploader.upload(coverImagePath, {
                filename_override: filename,
                folder: "book-covers",
                format: coverMimeType,
            });
            completeCoverImage = uploadResult.secure_url;
            yield node_fs_1.default.promises.unlink(coverImagePath);
        }
        let completeFileName = book.file;
        if (files.file && files.file[0]) {
            const bookFilePath = node_path_1.default.resolve(__dirname, "../../public/data/uploads", files.file[0].filename);
            const uploadResultPdf = yield cloudinary_1.default.uploader.upload(bookFilePath, {
                resource_type: "raw",
                filename_override: files.file[0].filename,
                folder: "book-pdfs",
                format: "pdf",
            });
            completeFileName = uploadResultPdf.secure_url;
            yield node_fs_1.default.promises.unlink(bookFilePath);
        }
        const updatedBook = yield bookModel_1.default.findByIdAndUpdate(bookId, {
            title: title || book.title,
            genre: genre || book.genre,
            description: description || book.description,
            coverImage: completeCoverImage,
            file: completeFileName,
        }, { new: true });
        if (!updatedBook) {
            return next((0, http_errors_1.default)(404, "Error updating the book"));
        }
        res.json({ message: "Book updated successfully", updatedBook });
    }
    catch (err) {
        console.error(err);
        return next((0, http_errors_1.default)(500, "Error while updating the book."));
    }
});
exports.UpdateBook = UpdateBook;
const ListBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // todo: add pagination.
        const books = yield bookModel_1.default.find().populate("author", "name");
        if (books.length === 0) {
            return res.status(404).json({ message: "Books not created" });
        }
        res.json(books);
    }
    catch (err) {
        return next((0, http_errors_1.default)(500, "Error while getting books"));
    }
});
exports.ListBooks = ListBooks;
const GetSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const book = yield bookModel_1.default
            .findOne({ _id: bookId })
            .populate("author", "name"); // Populate the author field with only the name field
        if (!book) {
            return next((0, http_errors_1.default)(404, "Book not found."));
        }
        return res.json(book);
    }
    catch (err) {
        console.error(err);
        return next((0, http_errors_1.default)(500, "Error while getting a book"));
    }
});
exports.GetSingleBook = GetSingleBook;
const DeleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const bookId = req.params.bookId;
    try {
        const book = yield bookModel_1.default.findById(bookId);
        if (!book) {
            return next((0, http_errors_1.default)(404, "Book not found"));
        }
        // Check Access
        const _req = req;
        if (book.author.toString() !== _req.userId) {
            return next((0, http_errors_1.default)(403, "You cannot delete others' book."));
        }
        const coverFileSplits = book.coverImage.split("/");
        const coverImagePublicId = coverFileSplits.at(-2) + "/" + ((_a = coverFileSplits.at(-1)) === null || _a === void 0 ? void 0 : _a.split(".").at(-2));
        const bookFileSplits = book.file.split("/");
        const bookFilePublicId = bookFileSplits.at(-2) + "/" + ((_b = bookFileSplits.at(-1)) === null || _b === void 0 ? void 0 : _b.split(".").at(-2));
        // Delete files from cloudinary
        yield cloudinary_1.default.uploader.destroy(coverImagePublicId);
        yield cloudinary_1.default.uploader.destroy(bookFilePublicId, {
            resource_type: "raw",
        });
        // Delete the book from the database
        yield bookModel_1.default.deleteOne({ _id: bookId });
        // Send a 204 No Content response
        return res.sendStatus(204);
    }
    catch (err) {
        console.error(err);
        return next((0, http_errors_1.default)(500, "Error while deleting the book."));
    }
});
exports.DeleteBook = DeleteBook;
