import { HttpException } from "./HttpException";

export class PayloadTooLargeException extends HttpException {
  constructor(message = "Payload Too Large") {
    super(413, message);
  }
}
