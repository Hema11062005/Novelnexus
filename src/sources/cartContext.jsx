import { createContext, useState } from "react";

// ✅ Create Context
export const CartContext = createContext();

// ✅ Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState("");

  // Add to cart with quantity
  const addToCart = (book) => {
    const existingItem = cart.find(
      (item) => item.id === book.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...book, quantity: 1 },
      ]);
    }

    // Popup
    setPopup(`${book.title} added to cart`);

    setTimeout(() => {
      setPopup("");
    }, 2000);
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Total items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
        popup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}