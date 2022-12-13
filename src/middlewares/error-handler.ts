import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors/NotFound.errors';
import { BadRequestError } from '../errors/BadRequest.errors';
import { UnAuthorizedError } from '../errors/UnAuthorized.errors';
import { ForbiddenError } from '../errors/Forbidden.errors';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadRequestError) {
    res.status(400).send(err.reason);
  } else if (err instanceof NotFoundError) {
    res.status(404).send(err.reason);
  } else if (err instanceof UnAuthorizedError) {
    res.status(401).send(err.reason);
  } else if (err instanceof ForbiddenError) {
    res.status(403).send(err.reason);
  } else {
    res.status(500).send(err.message);
  }
};

export { errorHandler };
