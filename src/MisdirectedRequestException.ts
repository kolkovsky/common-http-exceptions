import { HttpException } from "./HttpException";

export class MisdirectedRequestException extends HttpException {
  constructor(message = "Misdirected Request") {
    super(421, message);
  }
}
