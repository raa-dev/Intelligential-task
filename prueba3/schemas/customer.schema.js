//header file
const Joi = require('joi');
//validators
const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const password = Joi.string()
.min(3)
.max(15);
const email =  Joi.string();
const role = Joi.string().min(5);

const getCustomerSchema = Joi.object({
    id: id.required(),
});

const createCustomerSchema = Joi.object({
    name: name.required(),
    password: password.required(),
    email: email.required(),
    role: role
});

const updateCustomerSchema = Joi.object({
    name: name,
    password: password,
    email: email,
    role: role
});


module.exports = {
    createCustomerSchema,
    updateCustomerSchema,
    getCustomerSchema
};
