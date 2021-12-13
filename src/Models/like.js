const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let Like = sequelize.define(
    'Like',
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
            field: 'author_id'
        },
        musicId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'music_id'
        }
      
    },
    {
        tableName: 'likes',
        timestamps: false,
    }
);

module.exports = Like;