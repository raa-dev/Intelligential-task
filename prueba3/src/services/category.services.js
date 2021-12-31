//header files
const { boom } = require('@hapi/boom');
const { models } = require('../../libs/sequelize');


// plantilla de servicios para categorías
class CategoryService {
    constructor() {
        this.categories = [];
    }
    //CRUD operations
    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async find() {
        const answer = await models.Category.findAll();
        return answer;
    }

    async findOne(id) {
        const category = await models.Category.findByPk(id, {
        include: ['books']
        });
        if (!category) {
        throw boom.notFound('category not found')
        }
        return category;
    }

    async update(id, change) {
        const category = await this.findOne(id);
        const answer = await category.update(change);
        return answer;
    }

    async delete(id) {
        const category = await this.findOne(id);
        await category.destroy(category);
        return { message: "deleted", id };
    }
}


//exportar servicios
module.exports = CategoryService;
