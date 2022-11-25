import { Router, Request, Response } from 'express';

const router = Router();

router.all('*', (req: Request, res: Response) => {
  res.send('you are probably lost');
});

export { router as NotFoundRouter };
