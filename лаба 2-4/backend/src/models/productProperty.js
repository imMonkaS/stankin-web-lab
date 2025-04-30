const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProductProperty = sequelize.define('ProductProperty', {
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
  property_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  property_value: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  property_price: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false,
  },
}, {
  tableName: 'product_properties',
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

module.exports = ProductProperty;
