const { DataTypes } = require('sequelize');
const sequelize = require('../DBContext/Sequelize');

let UserInfo = sequelize.define(
    'user_info',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'user_id'
        },
        email: {
            type: DataTypes.STRING
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