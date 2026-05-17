import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { CartProvider, CartContext } from "./sources/cartContext";
import { AuthProvider } from "./sources/AuthContext";

function AppContent() {
  const { popup } = useContext(CartContext);

  return (
    <BrowserRouter>
      <Navbar />

      {/* Popup Notification */}
      {popup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {popup}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;