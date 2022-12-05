import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Reclamation } from '../models/Reclamation';
import { Role } from '../models/Role';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  port: parseInt(process.env.MYSQL_DB_PORT as string),
  username: process.env.MYSQL_DB_USERNAME,
  //password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: [User, Reclamation, Role],
  synchronize: true,
});

export default AppDataSource;
