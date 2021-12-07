const { DataTypes } = require('sequelize');
const sequelize = require('../DBContext/Sequelize');

const Genre = sequelize.define(
  'genre',
  {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
   }
)

// `sequelize.define` возвращает модель
//console.log(Genre === sequelize.models.Genre) // true
module.exports = Genre;