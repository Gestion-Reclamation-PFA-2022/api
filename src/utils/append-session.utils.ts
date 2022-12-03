import jwtServices from '../services/jwt.services';
import UserAttrs from '../interfaces/user.interfaces';
import { Response } from 'express';

const appendSession = async (res: Response, payload: UserAttrs) => {
  let token = jwtServices.sign({
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
  });

  // console.log(token);

  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: true,
  });
};

export default appendSession;
