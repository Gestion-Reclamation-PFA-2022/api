import { Role } from '../models/Role';
import RoleAttrs from '../interfaces/role.interfaces';
import RoleEnum from '../enums/role.enums';

class RoleService {
  public async create(role: RoleAttrs) {
    return Role.create(role as Role);
  }
  public async getRole(role: RoleEnum) {
    return Role.findOne({ where: { name: role } });
  }

  public async initiateRole() {
    for (const value of Object.values(RoleEnum)) {
      const user = Role.findOne({ where: { name: value } });
      if (!user) Role.create({ name: value }).save();
    }
  }
}

export default new RoleService();
