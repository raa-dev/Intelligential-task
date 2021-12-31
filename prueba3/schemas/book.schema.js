//header file
const Joi = require('joi');
//validators
const id = Joi.number().integer();
const title = Joi.string()
.min(2)
.max(15);
const year = Joi.number().integer().min(4);
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();

const year_min = Joi.number().integer().min(4);
const year_max = Joi.number().integer().min(4);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const  createBookSchema = Joi.object({
    title: title.required(),
    year: year.required(),
    description: description.required(),
    categoryId: categoryId.required()
});

const  updateBookSchema = Joi.object({
    title: title,
    year: year,
    description: description,
    categoryId
});

const  getBookSchema = Joi.object({
    id: id.required(),
});

const  queryBookSchema = Joi.object({
    limit,
    offset,
    year,
    year_min,
    year_max: year_max.when('year_min', {
        is: year_min.required(),
        then: Joi.required()
    })
});


module.exports = {
    createBookSchema,
    updateBookSchema,
    getBookSchema,
    queryBookSchema
};
