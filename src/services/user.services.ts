import { User } from '../models/User';
import { UserAttrs } from '../interfaces/user.interfaces';

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
}

export default new UserService();
