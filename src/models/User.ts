import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Reclamation } from './Reclamation';
import { Role } from './Role';

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

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
