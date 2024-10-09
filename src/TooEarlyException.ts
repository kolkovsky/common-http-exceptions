import { HttpException } from "./HttpException";

export class TooEarlyException extends HttpException {
  constructor(message = "Too Early") {
    super(425, message);
  }
}
