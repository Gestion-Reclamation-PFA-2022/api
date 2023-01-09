import {
  Entity, // Import the Entity decorator from TypeORM
  PrimaryGeneratedColumn, // Import the PrimaryGeneratedColumn decorator from TypeORM
  Column, // Import the Column decorator from TypeORM
  BaseEntity, // Import the BaseEntity class from TypeORM
  ManyToOne, // Import the ManyToOne decorator from TypeORM
} from 'typeorm';
import { User } from './User'; // Import the User entity

@Entity() // Decorate the Reclamation class with the Entity decorator
export class Reclamation extends BaseEntity {
  @PrimaryGeneratedColumn() // Decorate the id property with the PrimaryGeneratedColumn decorator
  id: number; // Define the id property as a number

  @Column({ nullable: false }) // Decorate the subject property with the Column decorator and specify that it is required
  subject: string; // Define the subject property as a string

  @Column({ nullable: false }) // Decorate the description property with the Column decorator and specify that it is required
  description: string; // Define the description property as a string

  @Column({ nullable: false }) // Decorate the date property with the Column decorator and specify that it is required
  date?: Date; // Define the date property as a Date object

  @ManyToOne(() => User, (user) => user.reclamations) // Decorate the user property with the ManyToOne decorator and specify the related entity and inverse side of the relationship
  user: User; // Define the user property as an instance of the User entity
}
