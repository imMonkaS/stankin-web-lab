const express = require('express');
const productController = require('../controllers/product');

const product_router = express.Router();

product_router.get('/search', productController.searchProduct);

module.exports = product_router;
