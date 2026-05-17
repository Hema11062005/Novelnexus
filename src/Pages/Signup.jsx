import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
        alert("Enter username");
        return;
    }

    alert("Signup successful!");
    navigate("/login");
    };

    return (
    <div className="p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">
        Signup
        </h2>

        <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4"
        >
        <input
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
        />

        <input
            type="password"
            placeholder="Enter password"
            className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white py-2 rounded">
            Signup
        </button>
        </form>

        <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
            Login
        </Link>
        </p>
    </div>
    );
}

export default Signup;