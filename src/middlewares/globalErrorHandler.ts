import { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";

const globalErrorsHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    errorStack: err.stack,
  });
};
export default globalErrorsHandler;
