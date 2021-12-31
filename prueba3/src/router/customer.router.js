//header files and helpers
const express = require('express');
const validatorHandler = require('../../middlewares/validator.handler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../../schemas/customer.schema');
//router
const router = express.Router();
//servicios
const CustomerService = require('../services/customer.services');
const service = new CustomerService();
//passport
const passport = require('passport');

router.get('/', 
    passport.authenticate('jwt', { session: false }),    
    async (req, res, next) => {
    try {
        const customers = await service.find();
        res.json(customers);
        console.log("customers sent");
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const customer = await service.findOne(id);
            res.json(customer);
            console.log('customer ' + customer.name + ' sent');
        } catch (error) {
            next(error);
        }
    }
);


//POST
router.post('/',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCustomer = await service.create(body);
            res.status(201).json(newCustomer);
        } catch (error) {
            next(error);
        }
    }
);

//patch
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const customer = await service.update(id, body);
            res.json(customer);
        } catch (error) {
            res.status(404).json({
            message: error.message
            })
        }
    }
);

//delete
router.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCustomer = await service.delete(id);
        res.json(deleteCustomer);
    } catch (error) {
        next(error)
    }
});

//exportar modulo
module.exports = router;
