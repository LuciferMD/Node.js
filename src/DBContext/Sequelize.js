const Sequelize = require("sequelize");

const sequelize = new Sequelize("mus", "postgres", "1234", {
  dialect: "postgres",
  host: "localhost",
  port: "5432"
});

sequelize.authenticate()
.catch((e) => {
  console.log('server: cannot connect to db;' + e);
  return;
});
console.log('server: connection to db completed');

module.exports = sequelize;