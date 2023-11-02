const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// const { DELETE } = require('sequelize/types/lib/query-types.js');

class Category extends Model {}

Category.init(
  {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
  category_name: {
        type: DataTypes.STRING,
        allowNull: false,
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
  // define columns
    // what is a category?
    // id, category name
    // id needs an int category names need a string and cant be null
    // 