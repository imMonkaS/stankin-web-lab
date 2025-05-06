const express = require('express');
const cartController = require('../controllers/cart');
const authMiddleware = require('../utils/middlewares/auth')

const cart_router = express.Router();

cart_router.get('/current', authMiddleware, cartController.getCurrentUserCart);
cart_router.post('/', authMiddleware, cartController.addToCart);
cart_router.delete('/', authMiddleware, cartController.removeFromCart);
cart_router.patch('/', authMiddleware, cartController.updateCartQuantity);

module.exports = cart_router;
