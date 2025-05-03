const { Review, User } = require('../models');

class ReviewRepository {
    async getAll() {
        return await Review.findAll({
            include: [
                {
                    model: User,
                    as: 'author',
                    exclude: ['password']
                }
            ],
            order: ['created_at']
        });
    }

    async postReview(data){
        return await Review.create(data);
    }
}

module.exports = new ReviewRepository();