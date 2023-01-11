import { User } from '../models/User';
import { UserAttrs } from '../interfaces/user.interfaces';
import RoleEnum from '../enums/role.enums';
import StatusEnum from '../enums/status.enums';

class UserService {
  public async getAll() {
    return User.find();
  }
  public async getByName(name: string) {
    return User.findOne({ where: { name: name } });
  }
  public async getByEmail(email: string) {
    return User.findOne({ where: { email: email } });
  }
  public async create(user: UserAttrs) {
    return User.create(user as User).save();
  }
  public async delete(email: string) {
    return User.delete({ email: email });
  }
  public async getByPhone(phone: string) {
    return User.findOne({ where: { phone: phone } });
  }

  public async getPendingManagers() {
    return User.find({
      where: { role: RoleEnum.manager, status: StatusEnum.pending },
    });
  }
  public async getApprovedManagers() {
    return User.find({
      where: { role: RoleEnum.manager, status: StatusEnum.approved },
    });
  }
  public async getDeclinedManagers() {
    return User.find({
      where: { role: RoleEnum.manager, status: StatusEnum.declined },
    });
  }
}

export default new UserService();
