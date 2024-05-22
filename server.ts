import app from "./src/app";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
dotenv.config();

const startServer = async () => {
  await connectDB();

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log("listening on port: " + port);
  });
};

startServer();
