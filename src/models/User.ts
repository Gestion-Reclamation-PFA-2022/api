import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import RoleEnum from '../enums/role.enums';
import { Reclamation } from './Reclamation';

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

  @OneToMany(() => Reclamation, (reclamation) => reclamation.user)
  reclamations: Reclamation[];

  @Column({ type: 'enum', enum: RoleEnum, nullable: true })
  role: RoleEnum;
}
