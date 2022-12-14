import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import AppDataSource from './db/db';
import { errorHandler } from './middlewares/error-handler';
import { UserRouter } from './routes/user.routes';
import { NotFoundRouter } from './routes/404.routes';

async function start() {
  const app = express();

  dotenv.config();

  app.use(express.json());
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
      console.log(err.message);
    });

  const server = app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(` app running on port ${process.env.SERVER_PORT || 3000}`);
  });

  const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      console.log('closing http server');
      server.close(() => {
        console.log('HTTP closed');
        process.exit(1);
      });
    });
  }
}

start();
