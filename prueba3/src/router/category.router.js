const express = require('express');
//middlewares
const validatorHandler = require('../../middlewares/validator.handler');
const { createCategorySchema,
    updateCategorySchema,
getCategorySchema } = require('../../schemas/category.schema');
//router
const router = express.Router();
    //servicios
const CategoryService = require('../services/category.services');
const service = new CategoryService();
//passport
const passport = require('passport');

router.get('/', async (req, res, next) => {

    try {
        const categories = await service.find();
        res.json(categories);
        console.log("categories sent");
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const categories = await service.findOne(id);
            res.status(200).json(categories);
            console.log('category ' + categories.name + ' sent');
        } catch (error) {
            next(error);
        }
    }
);

//POST
router.post('/',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createCategorySchema,'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCategory = await service.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            next(error);
        }
    }
);

//patch
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createCategorySchema, 'params'),
    validatorHandler(updateCategorySchema,'body'),
    async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const category = await service.update(id, body);
        res.json(category);
    } catch (error) {
        res.status(404).json({
        message: error.message
        });
        }
    }
);
//delete
router.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        const { id } = req.params;
        const deletedCategory = await service.delete(id);
        res.json(deletedCategory);
});


router.get('/:categoryid/products/:productid', async (req, res) => {
  const { categoryid, productid } = req.params;
  res.json({
    categoryid,
    productid
  });
});

//exportar modulo
module.exports = router;
