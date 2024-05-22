import { Request, Response, NextFunction } from "express";
import path from "node:path";
import fs from "node:fs";
import { IAuthRequest } from "../middlewares/authenticate";
import bookModel from "../book/bookModel";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";

const CreateBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  // Check if cover image and book file are present
  if (
    !files ||
    !files.coverImage ||
    !files.coverImage[0] ||
    !files.file ||
    !files.file[0]
  ) {
    return next(
      createHttpError(400, "Cover image and book file are required.")
    );
  }

  const coverImageFile = files.coverImage[0];
  const bookFile = files.file[0];

  const coverImageMimeType = coverImageFile.mimetype.split("/").pop();
  const coverImageFileName = coverImageFile.filename;
  const coverImageFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    coverImageFileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(coverImageFilePath, {
      filename_override: coverImageFileName,
      folder: "book-covers",
      format: coverImageMimeType,
    });

    const bookFileName = bookFile.filename;
    const bookFilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFileName
    );

    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );

    const _req = req as IAuthRequest;

    const newBook = await bookModel.create({
      title,
      genre,
      author: _req.userId,
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

    // Delete temporary files
    try {
      await fs.promises.unlink(coverImageFilePath);
      await fs.promises.unlink(bookFilePath);
    } catch (unlinkErr) {
      console.error("Error deleting temporary files:", unlinkErr);
    }

    res
      .status(201)
      .json({ id: newBook._id, message: "Book is created successfully" });
  } catch (err) {
    console.error(err);
    return next(createHttpError(500, "Error while uploading the files."));
  }
};

// const CreateBook = async (req: Request, res: Response, next: NextFunction) => {
//   const { title, genre } = req.body;
//   const files = req.files as { [fieldname: string]: Express.Multer.File[] };

//   const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
//   const fileName = files.coverImage[0].filename;
//   const filePath = path.resolve(
//     __dirname,
//     "../../public/data/uploads",
//     fileName
//   );

//   try {
//     const uploadResult = await cloudinary.uploader.upload(filePath, {
//       filename_override: fileName,
//       folder: "book-covers",
//       format: coverImageMimeType,
//     });

//     const bookFileName = files.file[0].filename;
//     const bookFilePath = path.resolve(
//       __dirname,
//       "../../public/data/uploads",
//       bookFileName
//     );

//     const bookFileUploadResult = await cloudinary.uploader.upload(
//       bookFilePath,
//       {
//         resource_type: "raw",
//         filename_override: bookFileName,
//         folder: "book-pdfs",
//         format: "pdf",
//       }
//     );

//     const _req = req as IAuthRequest;

//     const newBook = await bookModel.create({
//       title,
//       genre,
//       author: _req.userId,
//       coverImage: uploadResult.secure_url,
//       file: bookFileUploadResult.secure_url,
//     });

//     // Delete temporary files
//     try {
//       await fs.promises.unlink(filePath);
//       await fs.promises.unlink(bookFilePath);
//     } catch (unlinkErr) {
//       console.error("Error deleting temporary files:", unlinkErr);
//     }

//     res
//       .status(201)
//       .json({ id: newBook._id, message: "Book is created successfully" });
//   } catch (err) {
//     console.error(err);
//     return next(createHttpError(500, "Error while uploading the files."));
//   }
// };

const UpdateBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  const bookId = req.params.bookId;

  try {
    const book = await bookModel.findById(bookId);
    if (!book) {
      return next(createHttpError(404, "Book not found"));
    }

    // Check access
    const _req = req as IAuthRequest;
    if (book.author.toString() !== _req.userId) {
      return next(createHttpError(403, "You cannot update others' book."));
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    let completeCoverImage = book.coverImage;
    if (files.coverImage && files.coverImage[0]) {
      const filename = files.coverImage[0].filename;
      const coverMimeType = files.coverImage[0].mimetype.split("/").at(-1);
      const coverImagePath = path.resolve(
        __dirname,
        "../../public/data/uploads",
        filename
      );

      const uploadResult = await cloudinary.uploader.upload(coverImagePath, {
        filename_override: filename,
        folder: "book-covers",
        format: coverMimeType,
      });

      completeCoverImage = uploadResult.secure_url;
      await fs.promises.unlink(coverImagePath);
    }

    let completeFileName = book.file;
    if (files.file && files.file[0]) {
      const bookFilePath = path.resolve(
        __dirname,
        "../../public/data/uploads",
        files.file[0].filename
      );

      const uploadResultPdf = await cloudinary.uploader.upload(bookFilePath, {
        resource_type: "raw",
        filename_override: files.file[0].filename,
        folder: "book-pdfs",
        format: "pdf",
      });

      completeFileName = uploadResultPdf.secure_url;
      await fs.promises.unlink(bookFilePath);
    }

    const updatedBook = await bookModel.findByIdAndUpdate(
      bookId,
      {
        title: title || book.title,
        genre: genre || book.genre,
        coverImage: completeCoverImage,
        file: completeFileName,
      },
      { new: true }
    );

    if (!updatedBook) {
      return next(createHttpError(404, "Error updating the book"));
    }

    res.json({ message: "Book updated successfully", updatedBook });
  } catch (err) {
    console.error(err);
    return next(createHttpError(500, "Error while updating the book."));
  }
};
const ListBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // todo: add pagination.
    const books = await bookModel.find().populate("author", "name");
    if (books.length === 0) {
      return res.status(404).json({ message: "Books not created" });
    }
    res.json(books);
  } catch (err) {
    return next(createHttpError(500, "Error while getting books"));
  }
};

const GetSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookId = req.params.bookId;

  try {
    const book = await bookModel
      .findOne({ _id: bookId })
      // populate author field
      .populate("author", "name");
    if (!book) {
      return next(createHttpError(404, "Book not found."));
    }

    return res.json(book);
  } catch (err) {
    return next(createHttpError(500, "Error while getting a book"));
  }
};

const DeleteBook = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;

  try {
    const book = await bookModel.findById(bookId);
    if (!book) {
      return next(createHttpError(404, "Book not found"));
    }

    // Check Access
    const _req = req as IAuthRequest;
    if (book.author.toString() !== _req.userId) {
      return next(createHttpError(403, "You cannot delete others' book."));
    }

    const coverFileSplits = book.coverImage.split("/");
    const coverImagePublicId =
      coverFileSplits.at(-2) + "/" + coverFileSplits.at(-1)?.split(".").at(-2);

    const bookFileSplits = book.file.split("/");
    const bookFilePublicId =
      bookFileSplits.at(-2) + "/" + bookFileSplits.at(-1)?.split(".").at(-2);

    // Delete files from cloudinary
    await cloudinary.uploader.destroy(coverImagePublicId);
    await cloudinary.uploader.destroy(bookFilePublicId, {
      resource_type: "raw",
    });

    // Delete the book from the database
    await bookModel.deleteOne({ _id: bookId });

    // Send a 204 No Content response
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return next(createHttpError(500, "Error while deleting the book."));
  }
};

export { CreateBook, UpdateBook, ListBooks, GetSingleBook, DeleteBook };
