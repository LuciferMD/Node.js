const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

const Genre = sequelize.define(
  'Genre',
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
   },
   {
    tableName: 'genres',
    timestamps: false,
   }
)

// `sequelize.define` возвращает модель
//console.log(Genre === sequelize.models.Genre) // true
module.exports = Genre;