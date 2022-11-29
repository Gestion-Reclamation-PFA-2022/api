import { Request, Response, NextFunction } from 'express';
import jwtServices from '../services/jwt.services';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';

export const AuthentificationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accessToken = req.cookies.accessToken;
  if (!accessToken) throw new UnAuthorizedError();
  let currentUser = jwtServices.verify(accessToken);
  if (!currentUser) throw new UnAuthorizedError();
  req.currentUser = currentUser.email;
  next();
};
