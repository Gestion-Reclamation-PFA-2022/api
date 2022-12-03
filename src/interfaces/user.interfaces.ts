import Role from '../enums/role.enums';

interface UserAttrs {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
}

export default UserAttrs;
