export class ForbiddenError extends Error {
  reason = '403 not found';
  constructor(reason: string) {
    super();
    this.reason = reason;
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
