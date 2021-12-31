const sequelize = require('sequelize');
const { Book, BookSchema} = require('./book.model');
const { Category, CategorySchema} = require('./category.model');
const { Customer, CustomerSchema} = require('./customer.model');

function setupModels(sequelize) {
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Book.init(BookSchema, Book.config(sequelize));

    Book.associate(sequelize.models);
};

module.exports = { setupModels };