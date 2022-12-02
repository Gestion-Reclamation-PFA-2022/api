import userServices from '../services/user.services';
import reclamationServices from '../services/reclamation.services';
import { Request, Response } from 'express';

class ReclamationController {
  public async create(req: Request, res: Response) {
    let currentUser = req.currentUser;
    let userExist = await userServices.getByEmail(currentUser as string);
    if (!userExist) {
      res.status(400).send('login again');
    } else {
      let { subject, description, date } = req.body;
      let newReclamation = {
        subject: subject,
        description: description,
        date: date.replaceAll(':', '-'),
        user: userExist,
      };
      console.log(newReclamation);
      //await reclamationServices.create(newReclamation);
      res.status(200).send('reclamation added');
    }
  }
}

export default new ReclamationController();
