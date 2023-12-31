// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isDecimal: true
      },
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true
        }
    },
    category_id:{
      type: DataTypes.INTEGER,
      references:{
        model:'category',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
 // define columns => names need to be exact
    // int NOT NULL, primary key auto increment
    // product_name string NOT NULL 
    // price NOT NULL decimal (constraint? validate?)
    // category id foriegn key
    // stock NOT NULL INT validates that the value is numeric