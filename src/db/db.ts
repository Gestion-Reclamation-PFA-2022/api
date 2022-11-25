import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  port: parseInt(process.env.MYSQL_DB_PORT as string),
  username: process.env.MYSQL_DB_USERNAME,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: [User],
  synchronize: true,
});

export default AppDataSource;
