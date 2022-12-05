import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import RoleEnum from '../enums/role.enums';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: RoleEnum;
}
