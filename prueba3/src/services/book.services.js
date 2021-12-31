//header files
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../../libs/sequelize');

// service layout for books
class BookService {
    constructor() {
        this.books = [];
    }
    //CRUD operations
    async create(data) {
        const newBook = await models.Book.create(data)
        return newBook;
    }

    async find(query) {
        const options = {
        include: ['category'],
        where: {}
        }
        const { limit, offset } = query;
        if (limit && offset) {
        options.limit = limit;
        options.offset = offset;
        }

        const { year } = query;
        if (year) {
        options.where.year = year;
        }

        const { year_min, year_max } = query;
        if (year_min && year_max) {
        options.where.year = {
            [Op.gte]: year_min,
            [Op.lte]: year_max
        };
        }

        const answer = await models.Book.findAll(options);
        return answer
    }

    async findOne(id) {
        const book = await models.Book.findByPk(id);
        if (!book) {
        throw boom.notFound('book not found')
        }
        return book;
    }

    async update(id, change) {
        const book = await this.findOne(id);
        const answer = await book.update(change);
        return answer;
    }

    async delete(id) {
        const book = await this.findOne(id);
        await book.destroy(book);
        return { message: "deleted", id };
    }
}


//exportar servicios
module.exports = BookService;
