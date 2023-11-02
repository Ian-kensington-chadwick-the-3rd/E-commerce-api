const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'product',
        key: 'id'
      }
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
 // define columns
    // a cominator/join table for many to many
    // id
    // product id foreign key
    // tag id foreign key