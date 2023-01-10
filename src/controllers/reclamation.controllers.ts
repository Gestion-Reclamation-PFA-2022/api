import userServices from '../services/user.services';
import reclamationServices from '../services/reclamation.services';
import { Request, Response } from 'express';
import { PayloadAttrs } from '../interfaces/payload.interfaces';
import { NotFoundError } from '../errors/NotFound.errors';

class ReclamationController {
  public async create(req: Request, res: Response) {
    const currentUser = req.currentUser as PayloadAttrs;
    const userExist = await userServices.getByEmail(currentUser.email);

    if (!userExist) return res.status(400).send('login again'); // TODO: change this to custom error

    const { subject, description } = req.body;

    await reclamationServices.create({
      subject: subject,
      description: description,
      user: userExist,
    });
    res.status(200).send('reclamation added');
  }

  public async getMyReclamations(req: Request, res: Response) {
    const currentUser = req.currentUser as PayloadAttrs;
    const userExist = await userServices.getByEmail(currentUser.email);
    if (!userExist) throw new NotFoundError('user not found');
    const reclamations = await reclamationServices.getUserReclamations(
      userExist
    );
    res.json(reclamations);
  }
}

export default new ReclamationController();
