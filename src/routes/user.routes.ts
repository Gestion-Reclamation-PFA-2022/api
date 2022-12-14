import { Router, Request, Response } from 'express';
import userControllers from '../controllers/user.controllers';
import validation from '../middlewares/validation.middlewares';
import {
  signupValidator,
  loginValidator,
  reclamationValidator,
  roleSignup,
  statusManagers,
} from '../validators/validators';
import { AuthentificationCheck } from '../middlewares/ensure-authentificate.middlewares';
import { ensureRole } from '../middlewares/ensure-role.middlewares';
import reclamationControllers from '../controllers/reclamation.controllers';

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
  loginValidator,
  validation,
  userControllers.login
);

router.get(
  '/api/user/me',
  AuthentificationCheck,
  (req: Request, res: Response) => {
    res.status(200).json(req.currentUser);
  }
);

router.post(
  '/api/user/me/create-reclamation',
  AuthentificationCheck,
  reclamationValidator,
  validation,
  reclamationControllers.create
);

//Testing admin management
router.get(
  '/api/admin/managers/:status',
  AuthentificationCheck,
  ensureRole,
  statusManagers,
  validation,
  (req: Request, res: Response) => {
    res.status(200).json({
      message: 'hello admin',
    });
  }
);

export { router as UserRouter };
