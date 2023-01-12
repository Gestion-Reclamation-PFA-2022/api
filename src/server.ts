import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import AppDataSource from './db/db';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundRouter } from './routes/404.routes';
import { UserRouter } from './routes/user.routes';

async function start() {
  const app = express();

  dotenv.config();

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());

  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());

  app.use(morgan('dev'));

  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  app.use(UserRouter);
  app.use(NotFoundRouter);

  app.use(errorHandler);

  AppDataSource.initialize()
    .then((): void => {
      console.log('connected to mysql db');
    })
    .catch((err): void => {
      console.log(err);
      process.exit();
    });

  const server = app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(` app running on port ${process.env.SERVER_PORT || 3000}`);
  });

  const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      console.log('closing http server');
      server.close(async () => {
        console.log('HTTP closed');
        await AppDataSource?.destroy();
        process.exit(1);
      });
    });
  }
}

start();
