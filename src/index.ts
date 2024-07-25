import express from 'express';
import { userRoute } from './presentation/routes/user/user-route';
import { authRoute } from './presentation/routes/auth/auth-route';
import cookieParser from 'cookie-parser';

export class Application {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.routes();
  }

  routes() {
    this.app.use('/', userRoute);
    this.app.use('/', authRoute);
  }

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
