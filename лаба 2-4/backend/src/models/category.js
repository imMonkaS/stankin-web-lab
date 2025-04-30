const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'categories',
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

module.exports = Category;
