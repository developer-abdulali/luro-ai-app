// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_URL,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// export default cloudinary;

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "abdulali",
  api_key: "916933874973413",
  api_secret: "RdYS5FWtv7GJ_anY99wiPC9rnAY",
});

export default cloudinary;
