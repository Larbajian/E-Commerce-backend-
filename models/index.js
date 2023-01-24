// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDELETE: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag) "model: ----, through:---- as:----"
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_belongs_to_tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag_belongs_to_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
