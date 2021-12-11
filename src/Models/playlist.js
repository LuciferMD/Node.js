const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

const Playlist = sequelize.define(
  'playlist',
  {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    authorId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        field: 'author_id'
    } ,
    name: {
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
    tableName: 'playlists',
    timestamps: false,
  }
)

// `sequelize.define` возвращает модель
//console.log(Playlist === sequelize.models.Playlist) // true
module.exports = Playlist;