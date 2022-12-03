import { Request, Response, NextFunction } from 'express';
import jwtServices from '../services/jwt.services';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import { ForbiddenError } from '../errors/Forbidden.errors';

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

export const AuthentificationCheckAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accessToken = req.cookies.accessToken;
  if (!accessToken) throw new UnAuthorizedError();
  let currentUser = jwtServices.verify(accessToken);
  if (!currentUser) throw new UnAuthorizedError();
  if (currentUser.role === 1) {
    next();
  } else {
    throw new ForbiddenError('Forbidden');
  }
};
