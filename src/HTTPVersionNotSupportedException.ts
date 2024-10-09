import { HttpException } from "./HttpException";

export class HTTPVersionNotSupportedException extends HttpException {
  constructor(message = "HTTP Version Not Supported") {
    super(505, message);
  }
}
