import { Router, Request, Response } from 'express';

const router = Router();

router.get('/api/user/signup', (req: Request, res: Response) => {
  res.send('hello');
});

export { router as UserRouter };
