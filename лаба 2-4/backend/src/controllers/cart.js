const CartRepository = require('../repositories/cart')

class CartController {
    async addToCart(req, res) {
        try {
            let data = req.body;
            data['user_id'] = req.user.id;
            const request = await CartRepository.addToCart(data);
            res.status(201).json(request);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async removeFromCart(req, res) {
        try {
            await CartRepository.removeFromCart(req.query.cart_item_id);
            res.status(201).json({"message": "true"});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getCurrentUserCart(req, res) {
        try {
            const request = await CartRepository.getUsersCart(req.user.id);
            res.status(201).json(request);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateCartQuantity(req, res) {
        try {
            const request = await CartRepository.updateCartQuantity(req.body.id, req.body.quantity);
            res.status(201).json(request);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CartController();
