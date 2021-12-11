const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

const Music = sequelize.define(
  'music',
  {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    authorId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        field: 'author_id'
    } ,
    genreId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        field: 'genre_id'
    },
    file:{
        type: DataTypes.STRING
    },
    avatar : {
        type: DataTypes.BLOB
    },
    text:{
        type: DataTypes.TEXT
    }
  },
  {
    tableName: 'music',
    timestamps: false,
  }
)

// `sequelize.define` возвращает модель
//console.log(Music === sequelize.models.Music) // true
module.exports = Music;