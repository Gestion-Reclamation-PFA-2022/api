import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError.error';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ reason: err.reason });
  }

  console.log(err);

  res.status(500).json({
    reason: 'Something went wrong',
  });
};

export { errorHandler };
