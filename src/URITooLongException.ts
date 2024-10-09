import { HttpException } from "./HttpException";

export class URITooLongException extends HttpException {
  constructor(message = "URI Too Long") {
    super(414, message);
  }
}
