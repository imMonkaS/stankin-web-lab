const express = require('express');
const authController = require('../controllers/auth');
const userController = require('../controllers/user');
const authMiddleware = require('../utils/middlewares/auth')

const user_router = express.Router();

user_router.post('/auth/register', authController.register);
user_router.post('/auth/login', authController.login);
user_router.get('/current', authMiddleware, userController.getCurrentUser);

module.exports = user_router;
