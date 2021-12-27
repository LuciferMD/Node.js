const Joi = require("Joi");

const commentSchem = {
    addComment: Joi.object({
        musicId: Joi.string(),
        authorId: Joi.string(),
        text: Joi.string()
    }),

    changeComment: Joi.object({
        text: Joi.string()
    }),

}

module.exports = commentSchem;