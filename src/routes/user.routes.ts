import { Router, Request, Response } from 'express';
import userControllers from '../controllers/user.controllers';
import validation from '../middlewares/validation.middlewares';
import { signupValidator, loginValidator } from '../validators/validators';
import { AuthentificationCheck } from '../middlewares/ensure-authentificate.middlewares';

const router = Router();

router.get('/api/user/all', userControllers.getAll);

router.post(
  '/api/user/signup',
  signupValidator,
  validation,
  userControllers.signup
);

router.post(
  '/api/user/login',
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

export { router as UserRouter };
