import { HttpException } from "./HttpException";

export class InsufficientStorageException extends HttpException {
  constructor(message = "Insufficient Storage") {
    super(507, message);
  }
}
