import { Sequelize } from "sequelize";

const db = new Sequelize("simpleForm-db", "root", "73029228ai", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
