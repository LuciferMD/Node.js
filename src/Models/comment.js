const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let Comment = sequelize.define(
    'Comment',
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
            unique: false,
            field: 'author_id'
        },
        musicId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: false,
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