"use strict";
// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();
Object.defineProperty(exports, "__esModule", { value: true });
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_URL,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// export default cloudinary;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "abdulali",
    api_key: "916933874973413",
    api_secret: "RdYS5FWtv7GJ_anY99wiPC9rnAY",
});
exports.default = cloudinary_1.v2;
