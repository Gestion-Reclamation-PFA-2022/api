import { User } from '../models/User';
import UserAttrs from '../interfaces/user.interfaces';

class UserService {
  public async getAll() {
    return await User.find();
  }
  public async getByName(name: string) {
    return await User.findOne({ where: { name: name } });
  }
  public async getByEmail(email: string) {
    return await User.findOne({ where: { email: email } });
  }
  public async create(user: UserAttrs) {
    return User.create(user as User);
  }
  public async delete(email: string) {
    return User.delete({ email: email });
  }
}

export default new UserService();
