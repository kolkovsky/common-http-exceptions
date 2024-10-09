import { HttpException } from "./HttpException";

export class ProxyAuthenticationRequiredException extends HttpException {
  constructor(message = "Proxy Authentication Required") {
    super(407, message);
  }
}
