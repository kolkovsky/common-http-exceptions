import { HttpException } from "./HttpException";

export class NotExtendedException extends HttpException {
  constructor(message = "Not Extended") {
    super(510, message);
  }
}
