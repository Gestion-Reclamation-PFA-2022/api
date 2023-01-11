import { Router, Request, Response, NextFunction } from 'express';
import userControllers from '../controllers/user.controllers';
import validation from '../middlewares/validation.middlewares';
import {
  signupValidator,
  loginValidator,
  reclamationValidator,
  roleSignup,
  statusManagers,
  roleLogin,
} from '../validators/validators';
import { AuthentificationCheck } from '../middlewares/ensure-authentificate.middlewares';
import { ensureRole } from '../middlewares/ensure-role.middlewares';
import reclamationControllers from '../controllers/reclamation.controllers';
import RoleEnum from '../enums/role.enums';

const router = Router();

router.get('/api/user/all', userControllers.getAll);

router.post(
  '/api/:role/signup',
  roleSignup,
  signupValidator,
  validation,
  userControllers.signup
);

router.post(
  '/api/:role/login',
  roleLogin,
  loginValidator,
  validation,
  userControllers.login
);

router.get(
  '/api/user/me',
  AuthentificationCheck,
  reclamationControllers.getMyReclamations
);

router.post(
  '/api/user/me/new-reclamation',
  AuthentificationCheck,
  reclamationValidator,
  validation,
  reclamationControllers.create
);

//  admin management

router.get(
  '/api/admin/me',
  AuthentificationCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    (await ensureRole(RoleEnum.admin))(req, res, next);
  },
  userControllers.getPendingManager
);

router.get(
  '/api/admin/managers/:status',
  AuthentificationCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    (await ensureRole(RoleEnum.admin))(req, res, next);
  },
  statusManagers,
  validation,
  (req: Request, res: Response) => {
    res.status(200).json({
      message: 'hello ' + req.params.status,
    });
  }
);

export { router as UserRouter };
