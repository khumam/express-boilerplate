import express from 'express';
import 'dotenv/config';
import route from "./src/loaders/route.loader.js";
import database from "./src/loaders/database.loader.js";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT;
    route(this.app);
    database();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`APP START IN PORT ${this.port}`)
    })
  }
}

const app = new App();
app.listen();
