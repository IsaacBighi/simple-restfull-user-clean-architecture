import express from 'express';
import { userRoute } from './presentation/routes/user/user-route';

export class Application {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  routes() {
    this.app.use('/', userRoute);
  }

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
