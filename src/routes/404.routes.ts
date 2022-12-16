import { Router, Request, Response } from 'express';
import { NotFoundError } from '../errors/NotFound.errors';

const router = Router();

router.all('*', (req: Request, res: Response) => {
  throw new NotFoundError();
});

export { router as NotFoundRouter };
