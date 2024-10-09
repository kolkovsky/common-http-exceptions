import { HttpException } from "./HttpException";

export class UnprocessableEntityException extends HttpException {
  constructor(message = "Unprocessable Entity") {
    super(422, message);
  }
}
