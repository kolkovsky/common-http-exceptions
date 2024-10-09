import { HttpException } from "./HttpException";

export class PaymentRequiredException extends HttpException {
  constructor(message = "Payment Required") {
    super(402, message);
  }
}
