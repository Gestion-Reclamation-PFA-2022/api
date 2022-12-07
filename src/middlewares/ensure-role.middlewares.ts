import { Request, Response, NextFunction } from 'express';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import { ForbiddenError } from '../errors/Forbidden.errors';
import RoleAttrs from '../interfaces/role.interfaces';
import userServices from '../services/user.services';

export const ensureRole = async (role: RoleAttrs) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    let currentUser = req.currentUser;
    if (!currentUser) throw new UnAuthorizedError();
    let user = await userServices.getByEmail(currentUser);
    if (!user) throw new UnAuthorizedError();
    let userRoles = user.roles;
    const hasRole = userRoles.some((role) => {
      role === role;
    });
    if (!hasRole) throw new ForbiddenError('Forbidden');
    next();
  };
};
