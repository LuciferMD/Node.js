const Joi = require("joi");

const musicSchema = {
    addMusic: Joi.object({
        name : Joi.string().min(1).max(50).required(),
        authorId : Joi.required(),
        genreId: Joi.string(),
        file: Joi.string(),
        avatar: Joi.string(),
        text: Joi.string()
    }),

    changeMusic: Joi.object({
        name : Joi.string().min(1).max(20).required(),
        authorId : Joi.required(),
        genreId: Joi.string(),
        file: Joi.string(),
        avatar: Joi.string(),
        text: Joi.string()
    })
}

module.exports = musicSchema;