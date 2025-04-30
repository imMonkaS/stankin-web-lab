const { Op } = require('sequelize');
const Product = require('../models/product');

class ProductRepository {
    async search(filters) {
        const whereClause = {};
        
        if (filters.name) {
            whereClause.name = { [Op.iLike]: `%${filters.name}%` };
        }
        if (filters.alias) {
            whereClause.description = { [Op.iLike]: `%${filters.description}%` };
        }
        if (filters.short_description) {
            whereClause.class = { [Op.iLike]: `%${filters.class}%` };
        }
        if (filters.description) {
            whereClause.subClass = { [Op.iLike]: `%${filters.subClass}%` };
        }

        return await Product.findAll({ where: whereClause });
    }
}

module.exports = new ProductRepository();