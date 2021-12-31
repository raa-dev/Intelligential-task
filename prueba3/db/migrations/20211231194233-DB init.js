'use strict';

const { CATEGORY_TABLE, CategorySchema} = require('../models/category.model');
const { BOOK_TABLE, BookSchema} = require('../models/book.model');
const { CUSTOMER_TABLE, CustomerSchema} = require('../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(BOOK_TABLE);
  }
};
