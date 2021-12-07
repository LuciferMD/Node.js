const { DataTypes } = require('sequelize');
const sequelize = require('../DBContext/Sequelize');

let Follower = sequelize.define(
    'followers',
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
        followersId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'followers_id'
        }
      
    },
    {
        tableName: 'followers',
    }
);

module.exports = Follower;