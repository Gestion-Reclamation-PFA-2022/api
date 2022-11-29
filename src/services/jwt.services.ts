import jwt from 'jsonwebtoken';
import { PayloadAttrs } from '../interfaces/payload.interfaces';
import dotenv from 'dotenv';

dotenv.config();

class JwtService {
  public sign(userPayload: PayloadAttrs) {
    return jwt.sign(userPayload, process.env.ACCESS_TOKEN as string);
  }
  public verify(token: string): PayloadAttrs {
    return jwt.verify(
      token,
      process.env.ACCESS_TOKEN as string
    ) as PayloadAttrs;
  }
}

export default new JwtService();
