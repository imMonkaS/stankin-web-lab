import fetcher from "./fetcher";

export const addToCart = (data) => fetcher("/cart", "POST", data, true);
export const removeFromCart = (cart_item_id) => fetcher("/cart", "DELETE", null, true, {cart_item_id: cart_item_id});
export const getCurrentUsersCart = () => fetcher("/cart/current", "GET", null, true);
