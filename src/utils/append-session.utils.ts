import jwtServices from '../services/jwt.services';
import UserAttrs from '../interfaces/user.interfaces';
import { Response } from 'express';

const appendSession = async (res: Response, payload: UserAttrs) => {
  const user = Object.create({
    ...payload,
    password: undefined,
  });

  const token = jwtServices.sign({
    ...user,
  });

  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: true,
  });
};

export default appendSession;
