export type ErrorHandlerType = {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;
};

const createErrorHandler = (
  message: string,
  statusCode: number
): ErrorHandlerType => {
  const error = new Error(message) as ErrorHandlerType;
  error.message = message;
  error.statusCode = statusCode;
  error.name = "ErrorHandler";

  return error;
};

export default createErrorHandler;
