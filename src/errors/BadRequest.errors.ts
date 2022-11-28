export class BadRequestError extends Error {
  reason = '';
  constructor() {
    super();
    this.reason = 'Bad request';
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
