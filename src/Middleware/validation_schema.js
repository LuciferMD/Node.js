const Joi = require('joi');

module.exports =  schema =>{ 

    return (req,res,next) => {
        const isntValid = schema.validate(req.body).error;

    if(isntValid){
        next(new Error(isntValid.message));
    }
    next();
    };
};

