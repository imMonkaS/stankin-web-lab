const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: 1,
  },
}, {
  tableName: 'cart_items',
  timestamps: false,
  charset: 'cp1251',
  collate: 'cp1251_general_ci',
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'product_id']  // предотвращает дубликаты
    }
  ],
});

module.exports = Cart;
