// pages/Login.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../sources/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();

    if (!name) return alert("Enter username");

    login(name);          // ✅ save user
    navigate("/");        // ✅ redirect to home
    };

    return (
    <div className="p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white py-2 rounded">
            Login
        </button>
        </form>
    </div>
    );
}

export default Login;