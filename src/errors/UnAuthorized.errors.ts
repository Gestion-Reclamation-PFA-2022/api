export class UnAuthorizedError extends Error {
  reason = '';
  constructor() {
    super();
    this.reason = 'UnAuthorized';
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }
}
