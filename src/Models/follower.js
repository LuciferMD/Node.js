const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let Follower = sequelize.define(
    'Follower',
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
        timestamps: false,
    }
);

module.exports = Follower;