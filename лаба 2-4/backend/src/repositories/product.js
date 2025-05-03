const { Op } = require('sequelize');
const Product = require('../models/product');
const { ProductProperty, ProductImage, Category } = require('../models');

class ProductRepository {
    async search(filters) {
        const whereClause = {};
        
        if (filters.id) {
            whereClause.id = { [Op.eq]: filters.id };
        }
        if (filters.name) {
            whereClause.name = { [Op.iLike]: `%${filters.name}%` };
        }
        if (filters.alias) {
            whereClause.alias = { [Op.iLike]: `%${filters.alias}%` };
        }
        if (filters.short_description) {
            whereClause.short_description = { [Op.iLike]: `%${filters.short_description}%` };
        }
        if (filters.description) {
            whereClause.description = { [Op.iLike]: `%${filters.description}%` };
        }
        if (filters.category_id) {
            whereClause.category_id = { [Op.eq]: filters.category_id };
        }

        return await Product.findAll({
            where: whereClause,
            include: [
                {
                    model: ProductProperty,
                    as: 'properties',
                    exclude: ['product_id']
                },
                {
                    model: ProductImage,
                    as: 'images',
                    exclude: ['product_id']
                },
            ]
        });
    }

    async getCategories(){
        return await Category.findAll();
    }
}

module.exports = new ProductRepository();