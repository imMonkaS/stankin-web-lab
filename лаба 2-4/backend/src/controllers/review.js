const ReviewRepository = require('../repositories/reviews')

class ReviewController {
    async postReview(req, res) {
        try {
            let data = req.body;
            data['author_id'] = req.user.id;
            const review = await ReviewRepository.postReview(req.body);
            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllReviews(req, res) {
        try {
            const reviews = await ReviewRepository.getAll();
            res.status(201).json(reviews);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReviewController();
