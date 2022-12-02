import { User } from '../models/User';

interface ReclamationAttrs {
  subject: string;
  description: string;
  date: Date;
  user: User;
}

export { ReclamationAttrs };
