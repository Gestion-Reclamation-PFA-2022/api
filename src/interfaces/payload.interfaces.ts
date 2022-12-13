import RoleEnum from '../enums/role.enums';

export interface PayloadAttrs {
  name: string;
  email: string;
  phone: string;
  role: RoleEnum;
}
