import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export interface IAuthRequest extends Request {
  userId: string;
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) {
    return next(createHttpError(401, "Authentication token is required"));
  }
  try {
    const parsedToken = token.split(" ")[1];
    const decoded = verify(parsedToken, process.env.JWT_SECRET as string);
    const _req = req as IAuthRequest;
    _req.userId = decoded.sub as string;
    next();
  } catch (err) {
    return next(createHttpError(401, "Token expired"));
  }
};

export default authenticate;
