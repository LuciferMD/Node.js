const Joi = require('joi');

const userSchema = {
    addUser: Joi.object({
        login: Joi.string().min(1).required(),
        password: Joi.string().min(4).max(20).required()
    }),

    changeUser: Joi.object({
        login: Joi.string().min(1).required(),
        password: Joi.string().min(4).max(20).required()
    })

}

module.exports = userSchema;