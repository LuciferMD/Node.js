const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeDB');

let Followers = sequelize.define(
    'followers',
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
        followersId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'followers_id'
        }
      
    },
    {
        tableName: 'followers',
    }
);

module.exports = Followers;