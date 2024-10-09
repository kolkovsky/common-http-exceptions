import { HttpException } from "./HttpException";

export class BadGatewayException extends HttpException {
  constructor(message = "Bad Gateway") {
    super(502, message);
  }
}
