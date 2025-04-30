const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'product_images',
  timestamps: false,
  charset: 'cp1251',
  collate: 'cp1251_general_ci',
  indexes: [
    {
      unique: true,
      fields: ['id']
    }
  ],
});

module.exports = ProductImage;
