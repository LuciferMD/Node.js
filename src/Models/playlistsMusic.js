const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');

let playlistsMusic = sequelize.define(
    'playlists_music',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        playlistId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'playlsit_id'
        },
        musicId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
            field: 'music_id'
        }
      
    },
    {
        tableName: 'playlists_music',
    }
);

module.exports = playlistsMusic;