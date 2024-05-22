import mongoose from "mongoose";
import { IUser } from "./userTypes";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
