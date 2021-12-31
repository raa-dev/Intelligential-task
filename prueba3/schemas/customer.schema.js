//header file
const Joi = require('joi');
//validators
const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const email =  Joi.string();

const getCustomerSchema = Joi.object({
    id: id.required(),
});

const createCustomerSchema = Joi.object({
    name: name.required(),
    email: email.required()
});

const updateCustomerSchema = Joi.object({
    name: name,
    email: email
});


module.exports = {
    createCustomerSchema,
    updateCustomerSchema,
    getCustomerSchema
};
