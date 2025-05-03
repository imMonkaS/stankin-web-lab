const express = require('express');
const reviewController = require('../controllers/review');
const authMiddleware = require('../utils/middlewares/auth')

const review_router = express.Router();

review_router.get('/getAll', reviewController.getAllReviews);
review_router.post('/', authMiddleware, reviewController.postReview);

module.exports = review_router;
