import { Request, Response, NextFunction } from 'express';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import { ForbiddenError } from '../errors/Forbidden.errors';
import userServices from '../services/user.services';
import RoleEnum from '../enums/role.enums';

export const ensureRole = (role: RoleEnum) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log('HERE HERE');
    const currentUser = req.currentUser;
    if (!currentUser) throw new UnAuthorizedError();
    const user = await userServices.getByEmail(currentUser.email);
    if (!user) throw new UnAuthorizedError();
    const userRole: string = user.role;
    //const { role: userRole } = user;
    if (userRole !== role)
      throw new ForbiddenError('You dont have role to access this page');
    next();
  };
};
