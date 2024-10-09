import { HttpException } from "./HttpException";

export class RequestHeaderFieldsTooLargeException extends HttpException {
  constructor(message = "Request Header Fields Too Large") {
    super(431, message);
  }
}
