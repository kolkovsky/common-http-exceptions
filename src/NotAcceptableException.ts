import { HttpException } from "./HttpException";

export class NotAcceptableException extends HttpException {
  constructor(message = "Not Acceptable") {
    super(406, message);
  }
}
