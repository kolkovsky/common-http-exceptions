import { HttpException } from "./HttpException";

export class FailedDependencyException extends HttpException {
  constructor(message = "Failed Dependency") {
    super(424, message);
  }
}
