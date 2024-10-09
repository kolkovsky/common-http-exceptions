import { HttpException } from "./HttpException";

export class LengthRequiredException extends HttpException {
  constructor(message = "Length Required") {
    super(411, message);
  }
}
