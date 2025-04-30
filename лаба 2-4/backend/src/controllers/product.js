const ProductRepository = require('../repositories/product')
class ProductController {
    async searchProduct(req, res) {
        try {
            const filters = req.query;
            const products = await ProductRepository.search(filters);
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductController();
