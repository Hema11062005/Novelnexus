import { useContext } from "react";
import { CartContext } from "../sources/cartContext";
import { Link } from "react-router-dom";

function BookCard({ book }) {
    const { addToCart } = useContext(CartContext);

    return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Image */}
    <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <img
            src={book.image}
            alt={book.title}
            className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        </div>

      {/* Content */}
        <div className="p-4">
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600">₹{book.price}</p>

        <div className="flex gap-2 mt-3">
            <button
            onClick={() => addToCart(book)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
            >
            Add
            </button>

            <Link
            to={`/product/${book.id}`}
            className="bg-gray-300 px-3 py-1 rounded"
            >
            View
            </Link>
        </div>
        </div>
    </div>
    );
}

export default BookCard;