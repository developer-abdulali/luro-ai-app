import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongodbUrl = process.env.MONGODB_URL;

  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("MongoDB is not connected", err);
    });
    await mongoose.connect(mongodbUrl as string);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
