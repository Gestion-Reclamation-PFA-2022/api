import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError.error';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ reason: err.reason });
  }

  res.status(500).json({
    reason: 'Something went wrong',
  });
};

export { errorHandler };
