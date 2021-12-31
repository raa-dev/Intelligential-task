const { Model, DataTypes, Sequelize} = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

const BOOK_TABLE = 'books';

const BookSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    author: {
        allowNull: false,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: true
    },
    year: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
        }
}

class Book extends Model {
    static associate(models) {
        this.belongsTo(models.Category, { as: 'category'});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOK_TABLE,
            modelName: 'Book',
            timestamps: false,
        }
    }
}

module.exports = { BOOK_TABLE, BookSchema, Book };