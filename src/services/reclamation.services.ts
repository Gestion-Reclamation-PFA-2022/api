import { Reclamation } from '../models/Reclamation';
import { ReclamationAttrs } from '../interfaces/reclamation.interfaces';
import { User } from '../models/User';

class reclamationSercice {
  public async create(reclamation: ReclamationAttrs) {
    return await Reclamation.create(reclamation as Reclamation).save();
  }
  public async getAllReclamations() {
    return await Reclamation.find({ relations: { user: true } });
  }
  public async getUserReclamations(user: User) {
    return await Reclamation.find();
  }
}

export default new reclamationSercice();
