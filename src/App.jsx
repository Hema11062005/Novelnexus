import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./pages/Product";
import Cart from "./Pages/Cart"
import Login from "./Pages/Login";
import { CartProvider } from "./sources/cartContext";
import { AuthProvider } from "./sources/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;