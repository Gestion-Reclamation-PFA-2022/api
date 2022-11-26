import { Router, Request, Response } from 'express';
import userControllers from '../controllers/user.controllers';
import validation from '../middlewares/validation.middlewares';
import { signupValidator, loginValidator } from '../validators/validators';

const router = Router();

router.get('/api/user/all', userControllers.getAll);

router.post('/api/user/signup', userControllers.signup);

router.post('/api/user/login', userControllers.login);

router.get('/api/user/me');

export { router as UserRouter };
