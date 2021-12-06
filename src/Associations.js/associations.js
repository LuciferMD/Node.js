const sequelize = require("../models/sequelizeDB");

const users         = require("../models/comments");
const userInfo      = require("../models/followers");
const wallets       = require("../models/genres");
const operations    = require("../models/likes");
const roles         = require("../models/music");
const usersRoles    = require("../models/playlists");
const bets          = require("../models/playlistsMusic");
const results       = require("../models/userInfo");
const events        = require("../models/userMusic");
const events        = require("../models/users");



users.hasOne( userInfo, { foreignKey: 'userId', as: 'information' });
userInfo.belongsTo( users, { foreignKey: 'userId', as: 'user' });

users.hasMany( bets, { foreignKey: 'userId', as: 'createdBets' });
bets.belongsTo( users, { foreignKey: 'userId', as: 'user' });

sequelize.sync();

module.exports = sequelize;