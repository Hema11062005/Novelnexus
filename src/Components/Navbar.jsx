import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../sources/cartContext";
import { AuthContext } from "../sources/AuthContext";

function Navbar() {
    const { totalItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
    
      {/* Logo */}
    <h1 className="text-xl font-bold">Novel Nexus</h1>

      {/* Links */}
    <div className="space-x-4 flex items-center">
        <Link to="/">Home</Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
            Cart
            {totalItems > 0 && (
            <span className="ml-1 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm">
                {totalItems}
            </span>
            )}
        </Link>
        <Link to="/signup">Signup</Link>

        {/* Auth Section */}
        {user ? (
        <>
            <span className="font-semibold">Hi, {user.name}</span>
            <button
                onClick={logout}
                className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>
            </>
        ) : (
            <Link to="/login">Login</Link>
        )}
        </div>
    </nav>
    );
}

export default Navbar;