export class BadRequestError extends Error {
  reason = 'Bad request';
  constructor(reason: string) {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
