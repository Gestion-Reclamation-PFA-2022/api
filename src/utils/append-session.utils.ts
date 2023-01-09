import jwtServices from '../services/jwt.services';
import { UserAttrs } from '../interfaces/user.interfaces';
import { Response } from 'express';

const appendSession = async (res: Response, payload: UserAttrs) => {
  console.log(payload);

  const user = Object.assign(
    {},
    {
      ...payload,
      password: undefined,
    }
  );
  console.log(user);

  const token = jwtServices.sign({
    ...user,
  });

  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: false,
  });
};

export default appendSession;
