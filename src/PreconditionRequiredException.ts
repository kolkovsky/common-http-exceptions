import { HttpException } from "./HttpException";

export class PreconditionRequiredException extends HttpException {
  constructor(message = "Precondition Required") {
    super(428, message);
  }
}
