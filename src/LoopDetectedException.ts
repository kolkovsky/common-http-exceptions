import { HttpException } from "./HttpException";

export class LoopDetectedException extends HttpException {
  constructor(message = "Loop Detected") {
    super(508, message);
  }
}
