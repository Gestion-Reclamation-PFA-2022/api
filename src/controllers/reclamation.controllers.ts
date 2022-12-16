import userServices from '../services/user.services';
import reclamationServices from '../services/reclamation.services';
import { Request, Response } from 'express';
import { PayloadAttrs } from '../interfaces/payload.interfaces';

class ReclamationController {
  public async create(req: Request, res: Response) {
    let currentUser = req.currentUser as PayloadAttrs;
    let userExist = await userServices.getByEmail(currentUser.email);
    if (!userExist) {
      res.status(400).send('login again'); // TODO: change this to custom error
    } else {
      let { subject, description, date } = req.body;
      let newReclamation = {
        subject: subject,
        description: description,
        date: date,
        user: userExist,
      };
      console.log(newReclamation);
      //await reclamationServices.create(newReclamation);
      res.status(200).send('reclamation added');
    }
  }
}

export default new ReclamationController();
