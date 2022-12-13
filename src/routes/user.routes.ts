import { Router, Request, Response } from 'express';
import userControllers from '../controllers/user.controllers';
import validation from '../middlewares/validation.middlewares';
import {
  signupValidator,
  loginValidator,
  reclamationValidator,
  roleSignup,
} from '../validators/validators';
import { AuthentificationCheck } from '../middlewares/ensure-authentificate.middlewares';
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
    res.status(200).send('hello');
  }
);

router.post(
  '/api/user/me/create-reclamation',
  AuthentificationCheck,
  reclamationValidator,
  validation,
  reclamationControllers.create
);

export { router as UserRouter };
