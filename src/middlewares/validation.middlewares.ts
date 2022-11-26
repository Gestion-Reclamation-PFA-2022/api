import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validation = (req: Request, res: Response, next: NextFunction) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(errors.array()[0].msg);
  } else {
    next();
  }
};

export default validation;
