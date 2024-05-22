import mongoose from "mongoose";
import { IBooks } from "./bookTypes";

const bookSchema = new mongoose.Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IBooks>("Book", bookSchema);
