import {
  AfterRemove,
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import RoleEnum from '../enums/role.enums';
import StatusEnum from '../enums/status.enums';
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

  @Column({ type: 'enum', enum: StatusEnum, nullable: true })
  status: StatusEnum;

  @BeforeInsert()
  private setStatus() {
    this.status =
      this.role === RoleEnum.manager ? StatusEnum.pending : StatusEnum.approved;
  }

  @AfterRemove()
  private notifyAll() {
    console.log(this.id + ' got deleted');
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
    };
  }
}
