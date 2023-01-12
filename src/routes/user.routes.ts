import { NextFunction, Request, Response, Router } from 'express';
import reclamationControllers from '../controllers/reclamation.controllers';
import userControllers from '../controllers/user.controllers';
import RoleEnum from '../enums/role.enums';
import { AuthentificationCheck } from '../middlewares/ensure-authentificate.middlewares';
import { ensureRole } from '../middlewares/ensure-role.middlewares';
import validation from '../middlewares/validation.middlewares';
import {
  idUser,
  reclamationValidator,
  roleSignup,
  signupValidator,
  statusManagers,
  roleLogin,
  idReclamation,
} from '../validators/validators';

const router = Router();

router.get('/api/user/all', userControllers.getAll);

router.post(
  '/api/:role/signup',
  roleSignup,
  signupValidator,
  validation,
  userControllers.signup
);

router.post('/api/:role/login', roleLogin, validation, userControllers.login);

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

router.post(
  '/api/user/me/delete/:id',
  AuthentificationCheck,
  idReclamation,
  validation,
  reclamationControllers.deleteReclamation
);

router.post('/api/user/logout', userControllers.signout);

//  admin management

router.get(
  '/api/admin/me',
  AuthentificationCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    await ensureRole(RoleEnum.admin)(req, res, next);
  },
  userControllers.getPendingManager
);

router.post(
  '/api/admin/me/:id/approving',
  AuthentificationCheck,
  idUser,
  async (req: Request, res: Response, next: NextFunction) => {
    await ensureRole(RoleEnum.admin)(req, res, next);
  },
  userControllers.ApprovingManager
);

router.get(
  '/api/admin/managers/:status',
  AuthentificationCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    await ensureRole(RoleEnum.admin)(req, res, next);
  },
  statusManagers,
  validation,
  (req: Request, res: Response) => {
    res.status(200).json({
      message: 'hello ' + req.params.status,
    });
  }
);

router.post(
  '/api/assign-reclamation/:id/:managerId',
  AuthentificationCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    await ensureRole(RoleEnum.admin)(req, res, next);
  },
  reclamationControllers.assignManager
);

export { router as UserRouter };
