import { useParams } from "react-router-dom";
import { books } from "../Data";
import { useContext } from "react";
import { CartContext } from "../sources/cartContext";

function Product() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const book = books.find((b) => b.id === Number(id));

    if (!book) return <p>Not found</p>;

    return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Image */}
    <div className="w-full md:w-1/3 bg-gray-100 flex justify-center items-center p-4 rounded">
        <img
            src={book.image}
            alt={book.title}
            className="h-80 object-contain"
        />
    </div>

      {/* Details */}
        <div className="flex-1">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-xl text-gray-600 mt-2">₹{book.price}</p>

        {/* ✅ Description */}
        <p className="mt-4 text-gray-700">{book.description}</p>

        {/* ✅ Add to Cart */}
        <button
            onClick={() => addToCart(book)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Add to Cart
        </button>
    </div>
    </div>
);
}

export default Product;