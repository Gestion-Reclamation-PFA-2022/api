import { Response } from 'express';

const deleteSession = (res: Response) => {
  res.clearCookie('accessToken').status(200).send('logged out');
};

export default deleteSession;
