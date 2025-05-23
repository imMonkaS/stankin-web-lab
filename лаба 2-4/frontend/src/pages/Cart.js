import React, { useEffect, useState } from "react";
import { getCurrentUsersCart, removeFromCart, updateCartQuantity } from "../api/cart";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async () => {
        try {
            const items = await getCurrentUsersCart();
            setCartItems(items);
        } catch (error) {
            if (error.error = "Требуется авторизация"){
                window.location.href = '/register'
            }
            console.error("Ошибка при загрузке корзины:", error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const handleRemove = async (id) => {
        try {
            await removeFromCart(id);
            setCartItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Ошибка при удалении из корзины:", error);
            alert("Не удалось удалить товар из корзины.");
        }
    };

    const handleIncrease = async (id) => {
        try {
            const item = cartItems.find(item => item.id === id);
            const newQuantity = item.quantity + 1;
            await updateCartQuantity(id, newQuantity);
            setCartItems(prev => prev.map(item => 
                item.id === id ? {...item, quantity: newQuantity} : item
            ));
        } catch (error) {
            console.error("Ошибка при обновлении количества:", error);
            alert("Не удалось изменить количество.");
        }
    };

    const handleDecrease = async (id) => {
        try {
            const item = cartItems.find(item => item.id === id);
            const newQuantity = item.quantity - 1;
            
            if (newQuantity <= 0) {
                await handleRemove(id);
            } else {
                await updateCartQuantity(id, newQuantity);
                setCartItems(prev => prev.map(item => 
                    item.id === id ? {...item, quantity: newQuantity} : item
                ));
            }
        } catch (error) {
            console.error("Ошибка при обновлении количества:", error);
            alert("Не удалось изменить количество.");
        }
    };

    const handleClearCart = async () => {
        try {
            await Promise.all(cartItems.map(item => removeFromCart(item.id)));
            setCartItems([]);
        } catch (error) {
            console.error("Ошибка при очистке корзины:", error);
            alert("Не удалось очистить корзину.");
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((sum, item) => {
            const price = parseFloat(item.product?.price || 0);
            return sum + price * item.quantity;
        }, 0);
    };

    if (cartItems.length === 0) {
        return <p align="center">Корзина пуста</p>;
    }

    return (
        <table border="0" width="900" cellPadding="5" align="center">
            <tbody>
                <tr>
                    <td colSpan="3">
                        <h1 align="left">🛒 Корзина</h1>
                        <hr />
                    </td>
                </tr>

                {cartItems.map((item) => {
                    const { product } = item;
                    const price = parseFloat(product?.price || 0);
                    const sum = price * item.quantity;

                    return (
                        <tr key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
                            <td width="150" align="center">
                                <img src={product.image} width="100" height="100" alt={product.name} />
                            </td>
                            <td>
                                <h3 style={{cursor: 'pointer'}}> <a style={{ all: 'inherit' }} href={`/catalog/product?product_id=${item.product.id}`}>{product.name} </a></h3>
                                <p>Цена: {price} ₽</p>
                                <p>
                                    Количество: {item.quantity}
                                    <button 
                                        onClick={() => handleDecrease(item.id)}
                                        style={{
                                            margin: "0 5px",
                                            padding: "2px 8px",
                                            backgroundColor: "#f0ad4e",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        -
                                    </button>
                                    <button 
                                        onClick={() => handleIncrease(item.id)}
                                        style={{
                                            padding: "2px 8px",
                                            backgroundColor: "#5cb85c",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        +
                                    </button>
                                </p>
                                <p><b>Сумма:</b> {sum} ₽</p>
                            </td>
                            <td align="center" valign="middle">
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#d9534f",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    );
                })}

                <tr>
                    <td colSpan="3">
                        <hr />
                        <h2 align="right">Итого: {getTotalPrice()} ₽</h2>
                        <div align="right" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                            <button
                                onClick={handleClearCart}
                                style={{
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    backgroundColor: "#f0ad4e",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Очистить корзину
                            </button>
                            <button
                                style={{
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    backgroundColor: "#5cb85c",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Cart;