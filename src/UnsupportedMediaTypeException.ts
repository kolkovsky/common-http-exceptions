import { HttpException } from "./HttpException";

export class UnsupportedMediaTypeException extends HttpException {
  constructor(message = "Unsupported Media Type") {
    super(415, message);
  }
}
