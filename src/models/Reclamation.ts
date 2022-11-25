import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Reclamation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  date: Date;
}
