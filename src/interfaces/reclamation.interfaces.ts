import { User } from '../models/User';

export interface ReclamationAttrs {
  subject: string;
  description: string;
  date: Date;
  user: User;
}
