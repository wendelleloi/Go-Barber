import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
