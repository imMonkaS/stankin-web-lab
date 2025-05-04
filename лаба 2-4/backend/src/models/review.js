const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  article: {
    type: DataTypes.STRING(255), // заголовок отзыва
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
  client_type: {
    type: DataTypes.ENUM('new', 'regular'),
    allowNull: false,
  },
  source: {
    type: DataTypes.ENUM('friends', 'internet', 'advertising', 'other'),
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'reviews',
  timestamps: false,
  charset: 'cp1251',
  collate: 'cp1251_general_ci',
  indexes: [{ unique: true, fields: ['id'] }],
});

module.exports = Review;
