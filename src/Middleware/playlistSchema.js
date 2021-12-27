const Joi = require('joi');

const playlistSchema = {

    addPlaylist: Joi.object({
        authorId: Joi.required(),
        name : Joi.string().min(1).max(20).required(),
        avatar: Joi.string(),
        text : Joi.string(),
    }),

    changePlaylist: Joi.object({
        authorId: Joi.required(),
        name : Joi.string().min(1).max(20).required(),
        avatar: Joi.string(),
        text : Joi.string(),
    })
}

module.exports = playlistSchema;