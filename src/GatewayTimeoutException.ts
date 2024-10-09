import { HttpException } from "./HttpException";

export class GatewayTimeoutException extends HttpException {
  constructor(message = "Gateway Timeout") {
    super(504, message);
  }
}
