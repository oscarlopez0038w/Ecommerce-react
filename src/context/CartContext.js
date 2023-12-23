import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
        } else {
            console.error('El producto ya fue agregado al carrito');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        recalculateTotalQuantity(cartUpdated);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const recalculateTotalQuantity = (cartItems) => {
        const newTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setTotalQuantity(newTotalQuantity);
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;