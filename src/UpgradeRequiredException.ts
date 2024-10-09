import { HttpException } from "./HttpException";

export class UpgradeRequiredException extends HttpException {
  constructor(message = "Upgrade Required") {
    super(426, message);
  }
}
