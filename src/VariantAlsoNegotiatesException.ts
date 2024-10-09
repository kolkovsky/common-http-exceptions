import { HttpException } from "./HttpException";

export class VariantAlsoNegotiatesException extends HttpException {
  constructor(message = "Variant Also Negotiates") {
    super(506, message);
  }
}
