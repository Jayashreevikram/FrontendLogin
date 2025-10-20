import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const check = async (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password: pass,
      });

      if (res.status === 200) {
        alert("Login Successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password!");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    // ✅ Your original background image setup
    <div className="flex justify-center items-center bg-[url('/Images/bg.jpg')] h-screen bg-cover bg-center">
      {/* translucent box over bg */}
      <div className="bg-black/70 backdrop-blur-sm shadow-2xl rounded-2xl px-10 py-12 w-[380px] text-center border border-gray-600">
        <h1 className="text-3xl font-bold text-red-600 mb-8">Netflix Login</h1>

        <form onSubmit={check} className="flex flex-col space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-gray-900/80 text-white border border-gray-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="p-3 bg-gray-900/80 text-white border border-gray-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold 
                       py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <p className="mt-6 text-sm text-gray-300">
          New to Netflix?{" "}
          <span className="text-red-500 font-semibold hover:underline cursor-pointer">
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
