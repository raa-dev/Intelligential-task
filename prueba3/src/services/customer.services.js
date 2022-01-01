//header files
const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');
const bcrypt = require('bcrypt');

class CustomerService {
    constructor() {
        this.customers = [];
    }

    async create(data) {
        const hash = await bcrypt.hash(data.password, 10);
        const newData = {
            ...data,
            password: hash
        }
        const newCustomer = await models.Customer.create(newData);
        delete newCustomer.dataValues.password;
        return newCustomer;
    }
    
    async find() {
        const answer = await models.Customer.findAll();
        return answer;
    }
    
    async findOne(id) {
        const customer = await models.Customer.findByPk(id);
        if (!customer) {
            throw boom.notFound('customer not found');
        }
        return customer;
    }

    async findByEmail(email) {
        const answer = await models.Customer.findOne({
            where: { email }
        });
        return answer;
    }
    
    async update(id, change) {
        const customer = await this.findOne(id);
        const answer = await customer.update(change);
        return answer;
    }
    
    async delete(id) {
        const customer = await this.findOne(id);
        await customer.destroy(customer);
        return { message: "deleted", id };
    }
}

module.exports = CustomerService;