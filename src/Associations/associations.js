const sequelize = require("../DBContext/Sequelize");

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





user.hasOne( userInfo);
userInfo.belongsTo( user);

playlist.belongsTo(user,{foreignKey: 'authorId'});
user.hasMany(playlist, {foreignKey: 'authorId'}); 

playlist.belongsToMany(music, {through:'playlists_music', foreignKey: 'playlistId', otherKey:'musicId'});
music.belongsToMany(playlist, {through:'playlists_music', foreignKey: 'musicId', otherKey:'playlistId'});

user.belongsToMany(music, {through:'user_music', foreignKey: 'userId', otherKey:'musicId'});
music.belongsToMany(user, {through:'user_music', foreignKey: 'musicId', otherKey:'userId'});

music.belongsTo(genre);
genre.hasMany(music);

//like

like.belongsTo(music);
music.hasMany(like);

like.belongsTo(user, {foreignKey:'authorId'});
user.hasMany(like, {foreignKey:'authorId'});

//comment

comment.belongsTo(music);
music.hasMany(comment);

comment.belongsTo(user, {foreignKey:'authorId'});
user.hasMany(comment, {foreignKey:'authorId'});

//followers
//to do
user.belongsToMany(user, {through:'followers', foreignKey: 'userId', otherKey:'followerId'});
user.belongsToMany(user, {through:'followers', foreignKey: 'followerId', otherKey:'userId'});



/*
users( bets, { foreignKey: 'userId', as: 'createdBets' });
bets.belongsTo( users, { foreignKey: 'userId', as: 'user' });
*/
sequelize.sync();

module.exports = sequelize;