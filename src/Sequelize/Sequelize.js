const Sequelize = require("sequelize");
const logger = require('../Logger/logger')

const sequelize = new Sequelize("mus", "postgres", "1234", {
  dialect: "postgres",
  host: "localhost",
  port: "5432"
});

sequelize.authenticate()
.catch((e) => {
  logger(
    {
        message: 'Cannot connect to db: ' + e,
        level: 'ERROR',
    });
});
logger(
  {
      message: `Connected to db`,
      level: 'INFO',
  });

module.exports = sequelize;