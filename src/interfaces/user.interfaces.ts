import RoleEnum from '../enums/role.enums';

export interface UserAttrs {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: RoleEnum;
}
