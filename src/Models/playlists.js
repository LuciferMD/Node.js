const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const Playlist = sequelize.define(
  'playlist',
  {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    authorId:{
        type: DataTypes.BIGINT.UNSIGNED,
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
  }
)

// `sequelize.define` возвращает модель
console.log(Playlist === sequelize.models.Playlist) // true
//module.exports = Playlist;