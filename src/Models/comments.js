const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeDB');

let Comment = sequelize.define(
    'comments',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        authorId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'author_id'
        },
        musicId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'music_id'
        },
        text:{
            type: DataTypes.TEXT
        }
      
    },
    {
        tableName: 'comments',
    }
);

module.exports = Comment;