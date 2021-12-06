const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');

let UserInfo = sequelize.define(
    'user_info',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'user_id'
        },
        email: {
            type: DataTypes.email,
        },
        avatar : {
            type: DataTypes.BLOB
        },
        sex: {
            type: DataTypes.CHAR,
        },
        country:{
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'userInfo',
    }
);

module.exports = UserInfo;