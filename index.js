const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('sqlite::memory:') // для `sqlite`
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // для `postgres`
