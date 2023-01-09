import { Reclamation } from '../models/Reclamation';
import { ReclamationAttrs } from '../interfaces/reclamation.interfaces';
import { User } from '../models/User';

class reclamationSercice {
  public async create(reclamation: ReclamationAttrs) {
    return Reclamation.create(reclamation as Reclamation).save();
  }
  public async getAllReclamations() {
    return Reclamation.find();
  }

  public async getUserReclamations(user: User) {
    return Reclamation.find({
      where: {
        user: {
          id: user.id,
        },
      },
      relations: {
        user: true,
      },
    });
  }
}

export default new reclamationSercice();
