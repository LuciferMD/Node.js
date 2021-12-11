const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let Comment = sequelize.define(
    'comment',
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
        },
        text:{
            type: DataTypes.TEXT
        }
      
    },
    {
        tableName: 'comments',
        timestamps: false,
    }
);

module.exports = Comment;