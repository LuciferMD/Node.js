const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let Like = sequelize.define(
    'like',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        authorId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'author_id'
        },
        musicId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'music_id'
        }
      
    },
    {
        tableName: 'likes',
        timestamps: false,
    }
);

module.exports = Like;