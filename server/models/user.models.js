import db from "../utils/db.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const User = db.define("users", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  gender: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  createdDate: DataTypes.DATE,
});

export default User;

(async () => {
  await db.sync();
})();
