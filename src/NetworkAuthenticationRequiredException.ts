import { HttpException } from "./HttpException";

export class NetworkAuthenticationRequiredException extends HttpException {
  constructor(message = "Network Authentication Required") {
    super(511, message);
  }
}
