import { useContext } from "react";
import { CartContext } from "../sources/cartContext";

function Cart() {
    const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    } = useContext(CartContext);

    return (
    <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
        ) : (
        <>
            <div className="space-y-4">
            {cart.map((item) => (
                <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 shadow"
                >
                {/* Left */}
                <div className="flex items-center gap-4">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-contain bg-gray-100 rounded"
                    />

                    <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>₹{item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-2">
                        <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 px-2 rounded"
                        >
                        -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 px-2 rounded"
                        >
                        +
                        </button>
                    </div>
                    </div>
                </div>

                {/* Right */}
                <div className="text-right">
                    <p className="font-semibold">
                    ₹{item.price * item.quantity}
                    </p>

                    <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                    >
                    Remove
                    </button>
                </div>
                </div>
            ))}
            </div>

          {/* Total */}
            <div className="mt-8 flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-bold">
                Total: ₹{totalPrice}
            </h3>

            <button
                onClick={() => alert("Order placed successfully!")}
                className="bg-green-500 text-white px-6 py-2 rounded"
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