const sequelize = require("../Sequelize/Sequelize");

const comment         = require("../Models/comment");
const follower      = require("../Models/follower");
const genre      = require("../Models/genre");
const like    = require("../Models/like");
const music         = require("../models/music");
const playlist    = require("../Models/playlist");
const playlistMusic          = require("../Models/playlistMusic");
const userInfo       = require("../models/userInfo");
const userMusic        = require("../models/userMusic");
const user      = require("../Models/user");



// userInfo -> user

user.hasOne( userInfo);
userInfo.belongsTo( user);

// playlist -> user

playlist.belongsTo(user,{foreignKey: 'authorId'});
user.hasMany(playlist, {foreignKey: 'authorId', as: 'playlists'}); 

// music -> playlist_music -> playlist

playlist.belongsToMany(music, {through:'playlists_music', foreignKey: 'playlistId', otherKey:'musicId'});
music.belongsToMany(playlist, {through:'playlists_music', foreignKey: 'musicId', otherKey:'playlistId'});

//music -> user_music -> user

user.belongsToMany(music, {through:'user_music', foreignKey: 'userId', otherKey:'musicId'});
music.belongsToMany(user, {through:'user_music', foreignKey: 'musicId', otherKey:'userId'});

//genre -> music

music.belongsTo(genre);
genre.hasMany(music);

//like -> music

like.belongsTo(music,  {foreignKey:'musicId'});
music.hasMany(like, {foreignKey:'musicId'});

like.belongsTo(user, {foreignKey:'authorId'});
user.hasMany(like, {foreignKey:'authorId'});

//comment -> music

comment.belongsTo(music);
music.hasMany(comment);

comment.belongsTo(user, {foreignKey:'authorId'});
user.hasMany(comment, {foreignKey:'authorId'});

//followers -> users

//user.hasMany(follower, {foreignKey: 'userId'});
//follower.belongsTo(user, {foreignKey: 'userId'});

//user -> folower

user.hasMany(follower, {foreignKey: 'followersId'});
follower.belongsTo(user, {foreignKey: 'followersId'});
//user.belongsToMany(follower, {through: 'followers',foreignKey : 'followersId', otherKey : 'userId' });


sequelize.sync();

module.exports = sequelize;