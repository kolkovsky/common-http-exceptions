import { HttpException } from "./HttpException";

export class ImateapotException extends HttpException {
  constructor(message = "I'm a teapot") {
    super(418, message);
  }
}
