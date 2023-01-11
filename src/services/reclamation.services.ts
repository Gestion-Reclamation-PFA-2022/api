import { Reclamation } from '../models/Reclamation';
import { ReclamationAttrs } from '../interfaces/reclamation.interfaces';
import { User } from '../models/User';

class ReclamationService {
  public async create(reclamation: ReclamationAttrs) {
    return Reclamation.create(reclamation as Reclamation).save();
  }

  public async getById(id: number) {
    return Reclamation.findOne({ where: { id: id } });
  }

  public async getAllReclamations() {
    return Reclamation.find();
  }

  public async assignManager(reclamation: Reclamation, manager: User) {
    manager.reclamations = [...manager.reclamations, reclamation];
    return reclamation.save();
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

  public async deleteReclamationsById(id: number) {
    return Reclamation.delete({ id: id });
  }
}

export default new ReclamationService();
