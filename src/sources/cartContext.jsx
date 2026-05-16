// context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

  // Add item
    const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
    };

  // Remove item
    const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    };

  // ✅ Total items
    const totalItems = cart.length;

  // ✅ Total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
    <CartContext.Provider
        value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
        }}
    >
        {children}
    </CartContext.Provider>
    );
}