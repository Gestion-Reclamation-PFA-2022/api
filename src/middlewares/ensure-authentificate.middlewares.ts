import { NextFunction, Request, Response } from 'express';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import jwtServices from '../services/jwt.services';

export const AuthentificationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;
  if (!accessToken) throw new UnAuthorizedError();
  const currentUser = jwtServices.verify(accessToken);
  if (!currentUser) throw new UnAuthorizedError();
  req.currentUser = currentUser;
  next();
};
