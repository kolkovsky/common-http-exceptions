import { BadGatewayException } from "./BadGatewayException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { ExpectationFailedException } from "./ExpectationFailedException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ForbiddenException } from "./ForbiddenException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { GoneException } from "./GoneException";
import { HTTPVersionNotSupportedException } from "./HTTPVersionNotSupportedException";
import { HttpException } from "./HttpException";
import { ImateapotException } from "./ImateapotException";
import { InsufficientStorageException } from "./InsufficientStorageException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { LengthRequiredException } from "./LengthRequiredException";
import { LockedException } from "./LockedException";
import { LoopDetectedException } from "./LoopDetectedException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { MisdirectedRequestException } from "./MisdirectedRequestException";
import { NetworkAuthenticationRequiredException } from "./NetworkAuthenticationRequiredException";
import { NotAcceptableException } from "./NotAcceptableException";
import { NotExtendedException } from "./NotExtendedException";
import { NotFoundException } from "./NotFoundException";
import { NotImplementedException } from "./NotImplementedException";
import { PayloadTooLargeException } from "./PayloadTooLargeException";
import { PaymentRequiredException } from "./PaymentRequiredException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { PreconditionRequiredException } from "./PreconditionRequiredException";
import { ProxyAuthenticationRequiredException } from "./ProxyAuthenticationRequiredException";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { RequestHeaderFieldsTooLargeException } from "./RequestHeaderFieldsTooLargeException";
import { RequestTimeoutException } from "./RequestTimeoutException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooEarlyException } from "./TooEarlyException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { URITooLongException } from "./URITooLongException";
import { UnauthorizedException } from "./UnauthorizedException";
import { UnavailableForLegalReasonsException } from "./UnavailableForLegalReasonsException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { UnsupportedMediaTypeException } from "./UnsupportedMediaTypeException";
import { UpgradeRequiredException } from "./UpgradeRequiredException";
import { VariantAlsoNegotiatesException } from "./VariantAlsoNegotiatesException";

export function factory(code): HttpException {
  switch (code) {
    case 400:
      return new BadRequestException();

    case 401:
      return new UnauthorizedException();

    case 402:
      return new PaymentRequiredException();

    case 403:
      return new ForbiddenException();

    case 404:
      return new NotFoundException();

    case 405:
      return new MethodNotAllowedException();

    case 406:
      return new NotAcceptableException();

    case 407:
      return new ProxyAuthenticationRequiredException();

    case 408:
      return new RequestTimeoutException();

    case 409:
      return new ConflictException();

    case 410:
      return new GoneException();

    case 411:
      return new LengthRequiredException();

    case 412:
      return new PreconditionFailedException();

    case 413:
      return new PayloadTooLargeException();

    case 414:
      return new URITooLongException();

    case 415:
      return new UnsupportedMediaTypeException();

    case 416:
      return new RangeNotSatisfiableException();

    case 417:
      return new ExpectationFailedException();

    case 418:
      return new ImateapotException();

    case 421:
      return new MisdirectedRequestException();

    case 422:
      return new UnprocessableEntityException();

    case 423:
      return new LockedException();

    case 424:
      return new FailedDependencyException();

    case 425:
      return new TooEarlyException();

    case 426:
      return new UpgradeRequiredException();

    case 428:
      return new PreconditionRequiredException();

    case 429:
      return new TooManyRequestsException();

    case 431:
      return new RequestHeaderFieldsTooLargeException();

    case 451:
      return new UnavailableForLegalReasonsException();

    case 500:
      return new InternalServerErrorException();

    case 501:
      return new NotImplementedException();

    case 502:
      return new BadGatewayException();

    case 503:
      return new ServiceUnavailableException();

    case 504:
      return new GatewayTimeoutException();

    case 505:
      return new HTTPVersionNotSupportedException();

    case 506:
      return new VariantAlsoNegotiatesException();

    case 507:
      return new InsufficientStorageException();

    case 508:
      return new LoopDetectedException();

    case 510:
      return new NotExtendedException();

    case 511:
      return new NetworkAuthenticationRequiredException();
  }

  return new HttpException(code, "");
}
