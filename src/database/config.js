import { database } from "../config/database.config.js";
import Sequelize from "sequelize";

const config = new Sequelize(database.db, database.user, database.password, {
  host: database.host,
  dialect: database.dialect,
});

const db = {
  Sequelize: Sequelize,
  config: config,
}

export default db;