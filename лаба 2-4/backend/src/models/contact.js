const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ContactRequest = sequelize.define("ContactRequest", {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    subject: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    message: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    service: {
    type: DataTypes.ENUM("Стрижка", "Макияж", "SPA", "Консультация"),
    allowNull: false,
    }
});

module.exports = ContactRequest
  