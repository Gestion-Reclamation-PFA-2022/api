import { Request, Response } from 'express';
import RoleEnum from '../enums/role.enums';
import { BadRequestError } from '../errors/BadRequest.errors';
import pwdServices from '../services/pwd.services';
import userServices from '../services/user.services';
import appendSession from '../utils/append-session.utils';
import deleteSession from '../utils/delete-session.utils';

class UserController {
  public async getAll(req: Request, res: Response) {
    res.status(200).send(await userServices.getAll());
  }

  public async signup(req: Request, res: Response) {
    const { name, email, password, phone } = req.body;
    const userExist = await userServices.getByEmail(email);

    if (userExist) throw new BadRequestError('Email already used');

    try {
      const newUser = {
        name: name,
        email: email,
        phone: phone,
        password: await pwdServices.hash(password),
        role: req.params.role as RoleEnum,
      };
      await userServices.create(newUser);
      res.status(200).send('working');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new BadRequestError('Phone already used');
    }
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userExist = await userServices.getByEmail(email);
    if (!userExist) throw new BadRequestError('Email or Password incorrect');
    if ((await pwdServices.verify(userExist.password, password)) === false) {
      throw new BadRequestError('Email or Password incorrect');
    } else {
      await appendSession(res, userExist);
      res.status(200).send('logged In');
    }
  }

  public async getPendingManager(req: Request, res: Response) {
    res.status(200).send(await userServices.getPendingManagers());
  }

  public async signout(req: Request, res: Response) {
    deleteSession(res);
  }
}

export default new UserController();
