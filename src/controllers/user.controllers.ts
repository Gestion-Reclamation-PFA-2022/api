import { Request, Response } from 'express';
import userServices from '../services/user.services';
import pwdServices from '../services/pwd.services';
import appendSession from '../utils/append-session.utils';
import { BadRequestError } from '../errors/BadRequest.errors';
import deleteSession from '../utils/delete-session.utils';

class UserController {
  public async getAll(req: Request, res: Response) {
    res.status(200).send(await userServices.getAll());
  }
  public async signup(req: Request, res: Response) {
    let { name, email, password, phone } = req.body;
    let userExist = await userServices.getByEmail(email);
    if (userExist) {
      throw new BadRequestError('Email already used');
    } else {
      try {
        let newUser = {
          name: name,
          email: email,
          phone: phone,
          password: await pwdServices.hash(password),
        };
        await userServices.create(newUser);
      } catch (err: any) {
        throw new BadRequestError('Phone already used');
      }
    }
  }
  public async login(req: Request, res: Response) {
    let { email, password } = req.body;
    let userExist = await userServices.getByEmail(email);
    if (!userExist) throw new BadRequestError('Email or Password incorrect');
    if ((await pwdServices.verify(userExist.password, password)) === false) {
      throw new BadRequestError('Email or Password incorrect');
    } else {
      await appendSession(res, userExist);
      res.status(200).send('logged In');
    }
  }

  public async signout(req: Request, res: Response) {
    deleteSession(res);
  }
}

export default new UserController();
