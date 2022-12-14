import { CustomError } from './CustomError.error';

export class BadRequestError extends CustomError {
  reason = 'Bad request';
  status = 400;
  constructor(reason: string) {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
