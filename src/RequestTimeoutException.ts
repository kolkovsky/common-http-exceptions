import { HttpException } from "./HttpException";

export class RequestTimeoutException extends HttpException {
  constructor(message = "Request Timeout") {
    super(408, message);
  }
}
