import { Request, Response, NextFunction } from 'express';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import { ForbiddenError } from '../errors/Forbidden.errors';
import userServices from '../services/user.services';
import RoleEnum from '../enums/role.enums';

export const ensureRole = async (role: RoleEnum) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const currentUser = req.currentUser;
    if (!currentUser) throw new UnAuthorizedError();
    const user = await userServices.getByEmail(currentUser.email);
    if (!user) throw new UnAuthorizedError();
    const userRole = user.role;
    if (userRole !== role) throw new ForbiddenError('You dont have role');
    next();
  };
};
