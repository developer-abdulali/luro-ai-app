"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const bookController_1 = require("./bookController");
const multer_1 = __importDefault(require("multer"));
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const bookRouter = express_1.default.Router();
const upload = (0, multer_1.default)({
    dest: node_path_1.default.resolve(__dirname, "../../public/data/uploads"),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});
bookRouter.post("/", authenticate_1.default, upload.fields([
    {
        name: "coverImage",
        maxCount: 1,
    },
    { name: "file", maxCount: 1 },
]), bookController_1.CreateBook);
bookRouter.patch("/:bookId", authenticate_1.default, upload.fields([
    {
        name: "coverImage",
        maxCount: 1,
    },
    { name: "file", maxCount: 1 },
]), bookController_1.UpdateBook);
bookRouter.get("/", bookController_1.ListBooks);
bookRouter.get("/:bookId", bookController_1.GetSingleBook);
// bookRouter.delete("/:bookId", DeleteBook);
bookRouter.delete("/:bookId", authenticate_1.default, bookController_1.DeleteBook);
exports.default = bookRouter;
