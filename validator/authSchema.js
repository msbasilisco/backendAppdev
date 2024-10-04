const Joi = require('joi');

const registrationSchema = Joi.object({
    username : Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

module.exports = {
    registrationSchema,
    loginSchema,
};