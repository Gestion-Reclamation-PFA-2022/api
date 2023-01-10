import { CustomError } from './CustomError.error';

export class NotFoundError extends CustomError {
  status = 404;
  reason = '404 not found';
  constructor(reason = '404 not found') {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
