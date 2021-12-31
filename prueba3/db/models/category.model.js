const { Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
}

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Book, {
            as: 'books',
            foreignKey: 'categoryId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false,
        }
    }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
