import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/BadRequest.errors';

const validation = (req: Request, res: Response, next: NextFunction) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) throw new BadRequestError(errors.array()[0].msg);
  next();
};

export default validation;
