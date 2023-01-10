import { Router, Request, Response } from 'express';
import { NotFoundError } from '../errors/NotFound.errors';

const router = Router();

router.all('*', (_req: Request, _res: Response) => {
  throw new NotFoundError();
});

export { router as NotFoundRouter };
