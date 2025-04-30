const Cart = require("./cart");
const Category = require("./category");
const Product = require("./product");
const ProductImage = require("./productImage");
const ProductProperty = require("./productProperty");
const User = require("./user");

User.hasMany(Cart, { foreignKey: 'user_id', as: 'cartItems' });3

Cart.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Cart.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
});

Product.hasMany(ProductImage, {
    foreignKey: 'product_id',
    as: 'images',
    onDelete: 'CASCADE',
});

Product.hasMany(ProductProperty, {
    foreignKey: 'product_id',
    as: 'properties',
    onDelete: 'CASCADE',
});

Product.hasMany(Cart, { foreignKey: 'product_id', as: 'cartItems' });

ProductImage.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product',
});

ProductProperty.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product',
});

module.exports = {
    Product,
    ProductImage,
    ProductProperty,
    Cart,
    Category,
    User
}
  