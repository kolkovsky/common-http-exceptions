import { HttpException } from "./HttpException";

export class RangeNotSatisfiableException extends HttpException {
  constructor(message = "Range Not Satisfiable") {
    super(416, message);
  }
}
