import { NextFunction, Request, Response } from "express";
import { type ErrorHandlerType } from "../utils/utilityClass.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleWare = (
  err: ErrorHandlerType,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";

  if (err.message.includes("E11000 duplicate key error collection")) {
    err.message = "Email already exist in the system, use another email";
  }

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch =
  (func: ControllerType) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(func(req, res, next)).catch(next);
