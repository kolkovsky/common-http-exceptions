import { HttpException } from "./HttpException";

export class GoneException extends HttpException {
  constructor(message = "Gone") {
    super(410, message);
  }
}
