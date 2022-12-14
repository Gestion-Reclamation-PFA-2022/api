import { CustomError } from './CustomError.error';

export class UnAuthorizedError extends CustomError {
  reason = 'UnAuthorized';
  status = 401;
  constructor() {
    super();
    this.reason = 'UnAuthorized';
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }
}
