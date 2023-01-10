import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Reclamation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date?: Date;

  @ManyToOne(() => User, (user) => user.reclamations)
  user: User;
}
