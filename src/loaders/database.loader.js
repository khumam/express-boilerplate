import db from "../database/config.js";
import userModel from "../models/user.model.js";

export default function () {
  db.user = userModel(db.config, db.Sequelize);
  db.config.sync();
}
