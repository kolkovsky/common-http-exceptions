import { HttpException } from "./HttpException";

export class ForbiddenException extends HttpException {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}
