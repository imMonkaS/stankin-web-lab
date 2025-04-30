const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    manufacturer_id: {
      type: DataTypes.SMALLINT(6),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    available: {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: 1,
    },
    meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    meta_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    tableName: 'product',
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
  
  module.exports = Product;
