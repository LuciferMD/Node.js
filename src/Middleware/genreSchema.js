const Joi = require("joi");

const genreSchem = {

    addGenre: Joi.object({
        name: Joi.string(),
    }),

    changeGenre: Joi.object({
        name: Joi.string(),
    })
}

module.exports = genreSchem;