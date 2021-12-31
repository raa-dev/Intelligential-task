//header file
const Joi = require('joi');
//validators
const id = Joi.number().integer();
const author = Joi.string()
.min(2)
.max(25);
const title = Joi.string()
.min(2)
.max(70);
const year = Joi.number().integer().min(4);
const publisher = Joi.string();
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();

const year_min = Joi.number().integer().min(4);
const year_max = Joi.number().integer().min(4);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const  createBookSchema = Joi.object({
    author: author.required(),
    title: title.required(),
    year: year.required(),
    description: description.required(),
    publisher: publisher,
    image: image,
    categoryId: categoryId.required()
});

const  updateBookSchema = Joi.object({
    author: author,
    title: title,
    year: year,
    description: description,
    publisher: publisher,
    image: image,
    categoryId
});

const  getBookSchema = Joi.object({
    id: id.required(),
});

const  queryBookSchema = Joi.object({
    limit,
    offset,
    author,
    title,
    publisher,
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
