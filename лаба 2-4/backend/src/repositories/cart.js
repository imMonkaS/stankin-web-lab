const { Op } = require('sequelize');
const { Cart, Product } = require('../models');

class CartRepository {
    async addToCart(data) {
        return await Cart.create(data);
    }
    
    async removeFromCart(item_id){
        const cartItem = await Cart.findByPk(item_id);
        if (!cartItem) return null;
        await cartItem.destroy();
        return true
    }

    async getUsersCart(user_id){
        return await Cart.findAll({
            where: {
                user_id: {[Op.eq]: user_id}
            },
            include: [
                {
                    model: Product,
                    as: 'product'
                }
            ]
        });
    }

    async updateCartQuantity(id, newQuantity) {
        const cartItem = await Cart.findByPk(id);
        if (!cartItem) return null;
        
        cartItem.quantity = newQuantity;
        await cartItem.save();
        
        return cartItem;
    }
}

module.exports = new CartRepository();