import { HttpException } from "./HttpException";

export class LockedException extends HttpException {
  constructor(message = "Locked") {
    super(423, message);
  }
}
