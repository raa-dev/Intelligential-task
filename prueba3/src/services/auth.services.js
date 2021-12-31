const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../../config/config');

const CustomerService = require('./customer.services');
const service = new CustomerService();

class AuthService {
    async getCustomer(email, password) {
        const customer = await service.findByEmail(email);
        if (!customer) {
        throw boom.unauthorized();
        }
        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
        throw boom.unauthorized();
        }
        delete customer.dataValues.password;
        return customer;
    }

    signToken(customer) {
        const payload = {
        sub: customer.id,
        }
        const token = jwt.sign(payload, config.jwtSecret);
        return {
        customer,
        token
        };
    }

    async changePassword(token, newPassword) {
        try {
        const payload = jwt.verify(token, config.jwtSecret);
        const customer = await service.findOne(payload.sub);
        if (customer.recoveryToken !== token) {
            throw boom.unauthorized();
        }
        const hash = await bcrypt.hash(newPassword, 10);
        await service.update(customer.id, {recoveryToken: null, password: hash});
        return { message: 'password changed' }
        } catch (error) {
        throw boom.unauthorized();
        }
    }
}

module.exports = AuthService;
