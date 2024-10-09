import { HttpException } from "./HttpException";

export class MethodNotAllowedException extends HttpException {
  constructor(message = "Method Not Allowed") {
    super(405, message);
  }
}
