const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let UserMusic = sequelize.define(
    'user_music',
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
        musicId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'music_id'
        }
      
    },
    {
        tableName: 'user_music',
    }
);

module.exports = UserMusic;