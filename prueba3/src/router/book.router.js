//header files and helpers
const express = require('express');
//middlewares header files
const validatorHandler = require('../../middlewares/validator.handler');
const { createBookSchema,
    updateBookSchema,
    getBookSchema,
    queryBookSchema } = require('../../schemas/book.schema');
//router
const router = express.Router();
//servicios
const BookService = require('../services/book.services');
const service = new BookService();
//passport
const passport = require('passport');

//query tipo size
router.get('/',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(queryBookSchema, 'query'),
    async (req, res, next) => {
        try {
        const books = await service.find(req.query);
        res.json(books);
        console.log("books sent");
        } catch (error) {
        next(error);
        }
});

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(getBookSchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await service.findOne(id);
        res.status(200).json(book);
        console.log('book ' + book.name + ' sent');
        } catch (error) {
        next(error);
        }
    }
);

//POST
router.post('/',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createBookSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newBook = await service.create(body);
            res.status(201).json(newBook);
        } catch (error) {
            next(error);
        }
    }
);

//patch
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createBookSchema, 'params'),
    validatorHandler(updateBookSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const book = await service.update(id, body);
            res.json(book);
        } catch (error) {
            next(error);
        }
    }
);
//delete
router.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteProduct = await service.delete(id);
        res.json(deleteProduct);
    } catch (error) {
        next(error);
    }
});



//exportar modulo
module.exports = router;
