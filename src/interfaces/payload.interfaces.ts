import { Role } from '../models/Role';

interface PayloadAttrs {
  name: string;
  email: string;
  phone: string;
  roles: Role[];
}

export { PayloadAttrs };
