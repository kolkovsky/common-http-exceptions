import { HttpException } from "./HttpException";

export class ExpectationFailedException extends HttpException {
  constructor(message = "Expectation Failed") {
    super(417, message);
  }
}
