import { HttpException } from "./HttpException";

export class PreconditionFailedException extends HttpException {
  constructor(message = "Precondition Failed") {
    super(412, message);
  }
}
