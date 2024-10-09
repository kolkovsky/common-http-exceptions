import { HttpException } from "./HttpException";

export class NotImplementedException extends HttpException {
  constructor(message = "Not Implemented") {
    super(501, message);
  }
}
