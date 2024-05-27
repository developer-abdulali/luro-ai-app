"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.RegisterUser = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const userModel_1 = __importDefault(require("./userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// user registration fuction
const RegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // validate
    if (!name || !email || !password) {
        const error = (0, http_errors_1.default)(400, "All fields are required");
        return next(error);
    }
    // checking already exist user database call
    try {
        const user = yield userModel_1.default.findOne({ email });
        if (user) {
            const error = (0, http_errors_1.default)(400, "User already exists with this email");
            return next(error);
        }
    }
    catch (error) {
        return next((0, http_errors_1.default)(500, "Error while creating user"));
    }
    // hashing the password
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    let newUser;
    try {
        newUser = yield userModel_1.default.create({
            name,
            email,
            password: hashPassword,
        });
    }
    catch (error) {
        return next((0, http_errors_1.default)(500, "Error while creating user"));
    }
    // creating new jwt token for user
    try {
        const token = (0, jsonwebtoken_1.sign)({ sub: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res
            .status(201)
            .json({ accessToken: token, message: "user created successfully" });
    }
    catch (error) {
        return next((0, http_errors_1.default)(500, "Error while signing the jwt token"));
    }
});
exports.RegisterUser = RegisterUser;
// login user function
const LoginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // validate
        if (!email || !password) {
            throw (0, http_errors_1.default)(400, "All fields are required");
        }
        const user = yield userModel_1.default.findOne({ email });
        if (!user) {
            throw (0, http_errors_1.default)(404, "User not found");
        }
        // comparing the password
        const isMatch = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!isMatch) {
            throw (0, http_errors_1.default)(400, "Email or password incorrect!");
        }
        // creating new jwt token for user
        const token = (0, jsonwebtoken_1.sign)({ sub: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res
            .status(201)
            .json({ accessToken: token, message: "User logged in successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.LoginUser = LoginUser;
