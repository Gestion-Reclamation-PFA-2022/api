import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { UserRouter } from './routes/user.routes';
import { NotFoundRouter } from './routes/404.routes';

async function start() {
  const app = express();

  dotenv.config();

  app.use(express.json());

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

  const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(` app running on port ${process.env.SERVER_PORT}`);
  });

  process.on('SIGINT', () => {
    console.log('closing http server');
    server.close(() => {
      console.log('HTTP closed');
    });
  });

  process.on('SIGTERM', () => {
    console.log('closing http server');
    server.close(() => {
      console.log('HTTP closed');
    });
  });
}

start();
