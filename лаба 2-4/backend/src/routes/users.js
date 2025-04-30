const express = require('express');
const authController = require('../controllers/auth');

const user_router = express.Router();

user_router.post('/auth/register', authController.register);
user_router.post('/auth/login', authController.login);

module.exports = user_router;
