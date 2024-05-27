"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorsHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        message: err.message,
        errorStack: err.stack,
    });
};
exports.default = globalErrorsHandler;
