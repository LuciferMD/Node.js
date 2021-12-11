const { DataTypes } = require('sequelize');
const sequelize = require('../Sequelize/Sequelize');

let playlistMusic = sequelize.define(
    'playlist_music',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        playlistId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'playlsit_id'
        },
        musicId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            field: 'music_id'
        }
      
    },
    {
        tableName: 'playlists_music',
    }
);

module.exports = playlistMusic;