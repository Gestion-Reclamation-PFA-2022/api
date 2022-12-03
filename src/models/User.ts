import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Reclamation } from './Reclamation';
import Role from '../enums/role.enums';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  role: Role;

  @OneToMany(() => Reclamation, (reclamation) => reclamation.user)
  reclamations: Reclamation[];
}
