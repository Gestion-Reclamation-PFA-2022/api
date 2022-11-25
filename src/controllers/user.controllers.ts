import { Request, Response } from 'express';
import userServices from '../services/user.services';
import pwdServices from '../services/pwd.services';
import { UserAttrs } from '../interfaces/user.interfaces';

class UserController {
  public async getAll(req: Request, res: Response) {
    res.status(200).send(await userServices.getAll());
  }
  public async signup(req: Request, res: Response) {
    let { name, email, password, phone } = req.body;
    let userExist = await userServices.getByEmail(email);
    if (userExist) {
      res.status(400).send('Email already used');
    } else {
      let newUser = {
        name: name,
        email: email,
        phone: phone,
        password: await pwdServices.hash(password),
      };
      await userServices.create(newUser);
      res.status(200).send('user added');
    }
  }
}
