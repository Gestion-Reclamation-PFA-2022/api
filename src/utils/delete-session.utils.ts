import { Response } from 'express';

const deleteSession = (res: Response) => {
  res.clearCookie('accessToken');
};

export default deleteSession;
