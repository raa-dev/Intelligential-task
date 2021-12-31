//import router files
const express = require('express');
const booksRouter = require('./book.router');
const categoriesRouter = require('./category.router');
const customersRouter = require('./customer.router');
const viewsRouter = require('./views.router');
const authRouter = require('./auth.router');

//define router function
function routerApi(app) {
    const router = express.Router();
    //api
    app.use('/api/v1', router);
    router.use('/books', booksRouter);
    router.use('/categories', categoriesRouter);
    router.use('/customers', customersRouter);
    router.use('/auth', authRouter);
    //views
    app.use('/', viewsRouter);
  }
  //export function
  module.exports = routerApi;