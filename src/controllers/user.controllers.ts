import { Request, Response } from 'express';
import userServices from '../services/user.services';
import pwdServices from '../services/pwd.services';
import appendSession from '../utils/append-session.utils';
import { BadRequestError } from '../errors/BadRequest.errors';

class UserController {
  public async getAll(req: Request, res: Response) {
    res.status(200).send(await userServices.getAll());
  }
  public async signup(req: Request, res: Response) {
    let { name, email, password, phone } = req.body;
    let userExist = await userServices.getByEmail(email);
    if (userExist) {
      throw new BadRequestError();
    } else {
      let newUser = {
        name: name,
        email: email,
        phone: phone,
        password: await pwdServices.hash(password),
      };
      userServices
        .create(newUser)
        .then(() => {
          appendSession(res, newUser);
          res.status(200).send('user added');
        })
        .catch(() => {
          throw new BadRequestError();
        });
    }
  }
  public async login(req: Request, res: Response) {
    let { email, password } = req.body;
    let userExist = await userServices.getByEmail(email);
    if (!userExist) throw new BadRequestError();
    if ((await pwdServices.verify(userExist.password, password)) === false) {
      throw new BadRequestError();
    } else {
      await appendSession(res, userExist);
      res.status(200).send('logged In');
    }
  }
}

export default new UserController();
