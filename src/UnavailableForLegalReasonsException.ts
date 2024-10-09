import { HttpException } from "./HttpException";

export class UnavailableForLegalReasonsException extends HttpException {
  constructor(message = "Unavailable For Legal Reasons") {
    super(451, message);
  }
}
