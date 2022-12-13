import { PayloadAttrs } from '../src/interfaces/payload.interfaces';

declare global {
  namespace Express {
    export interface Request {
      currentUser?: PayloadAttrs;
    }
  }
}
