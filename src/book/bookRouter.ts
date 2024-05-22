import path from "node:path";
import express from "express";
import {
  CreateBook,
  ListBooks,
  GetSingleBook,
  UpdateBook,
  DeleteBook,
} from "./bookController";
import multer from "multer";
import authenticate from "../middlewares/authenticate";

const bookRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

bookRouter.post(
  "/",
  authenticate,
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    { name: "file", maxCount: 1 },
  ]),
  CreateBook
);

bookRouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    { name: "file", maxCount: 1 },
  ]),
  UpdateBook
);

bookRouter.get("/", ListBooks);

bookRouter.get("/:bookId", GetSingleBook);

bookRouter.delete("/:bookId", authenticate, DeleteBook);

export default bookRouter;
