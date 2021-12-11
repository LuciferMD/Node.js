const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

const User = sequelize.define(
  'User',
  {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }     
  },
  {
    tableName: 'users',
    timestamps: false,
  }
)

module.exports = User;