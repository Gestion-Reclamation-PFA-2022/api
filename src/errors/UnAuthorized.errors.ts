export class UnAuthorized extends Error {
  reason = '';
  constructor() {
    super();
    this.reason = 'UnAuthorized';
    Object.setPrototypeOf(this, UnAuthorized.prototype);
  }
}
