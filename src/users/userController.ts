import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "./userTypes";
dotenv.config();

// user registration fuction
const RegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  // validate
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }
  // checking already exist user database call
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(400, "User already exists with this email");
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "Error while creating user"));
  }

  // hashing the password
  const hashPassword = await bcrypt.hash(password, 10);
  let newUser: IUser;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while creating user"));
  }
  // creating new jwt token for user
  try {
    const token = sign({ sub: newUser._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    res
      .status(201)
      .json({ accessToken: token, message: "user created successfully" });
  } catch (error) {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};

// login user function
const LoginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    // validate
    if (!email || !password) {
      throw createHttpError(400, "All fields are required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw createHttpError(404, "User not found");
    }
    // comparing the password
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw createHttpError(400, "Email or password incorrect!");
    }
    // creating new jwt token for user
    const token = sign({ sub: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    res
      .status(201)
      .json({ accessToken: token, message: "User logged in successfully" });
  } catch (error) {
    next(error);
  }
};

// // login user fuction
// const LoginUser = async (req: Request, res: Response, next: NextFunction) => {
//   const { email, password } = req.body;
//   // validate
//   if (!email || !password) {
//     return next(createHttpError(400, "All fields are required"));
//   }
//   const user = await userModel.findOne({ email });
//   if (!user) {
//     return next(createHttpError(404, "User not found"));
//   }
//   // comparing the password
//   const isMatch = await bcrypt.compare(password, user?.password);
//   if (!isMatch) {
//     return next(createHttpError(400, "Email or password incorrect!"));
//   }
//   // creating new jwt token for user
//   const token = sign({ sub: user._id }, process.env.JWT_SECRET!, {
//     expiresIn: "7d",
//   });

//   res
//     .status(201)
//     .json({ accessToken: token, message: "User logged in successfully" });
// };

export { RegisterUser, LoginUser };
