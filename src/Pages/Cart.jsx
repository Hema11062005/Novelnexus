// pages/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../sources/cartContext";

function Cart() {
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
    <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

    {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛒</p>
    ) : (
        <>
          {/* Cart Items */}
        <div className="space-y-4">
            {cart.map((item) => (
            <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
            >
                {/* Left: Image + Title */}
                <div className="flex items-center gap-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-20 object-contain bg-gray-100 p-1 rounded"
                />

                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500">₹{item.price}</p>
                </div>
                </div>

                {/* Right: Remove */}
                <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                Remove
                </button>
            </div>
            ))}
        </div>

          {/* Summary Section */}
            <div className="mt-8 border-t pt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">
                Total: ₹{totalPrice}
            </h3>

            <button
                onClick={() => alert("Order placed successfully!")}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
                Buy Now
            </button>
            </div>
        </>
        )}
    </div>
    );
}

export default Cart;