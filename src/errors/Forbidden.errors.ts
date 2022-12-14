import { CustomError } from './CustomError.error';

export class ForbiddenError extends CustomError {
  reason = '403 not found';
  status = 403;
  constructor(reason: string) {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
