import Role from '../enums/role.enums';

interface PayloadAttrs {
  name: string;
  email: string;
  phone: string;
  role: Role;
}

export { PayloadAttrs };
