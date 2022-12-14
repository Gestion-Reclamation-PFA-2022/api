import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import glob from 'glob';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_DB_PORT as string) || 3306,
  username: process.env.MYSQL_DB_USERNAME,
  database: process.env.MYSQL_DB_NAME,
  //password: process.env.MYSQL_DB_PASSWORD || '123',
  entities: glob.sync(__dirname + '/../models/*.js'),
  synchronize: true,
});

export default AppDataSource;
