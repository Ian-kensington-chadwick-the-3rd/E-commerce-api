// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// look up syntax of comments
Product.belongsTo(Category, {
  foreignKey: 'category_id'
  
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
// many to many relationships
Product.belongsToMany(Tag, {
  through: ProductTag,
  // foreignKey: 'tag_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // foreignKey: 'tag_id'

});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
