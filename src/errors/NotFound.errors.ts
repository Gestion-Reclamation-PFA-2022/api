export class NotFoundError extends Error {
  reason = '404 not found';
  constructor(reason: string) {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
