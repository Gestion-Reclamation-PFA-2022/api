import { Role } from '../models/Role';

interface UserAttrs {
  name: string;
  email: string;
  phone: string;
  password: string;
  roles: Role[];
}

export default UserAttrs;
