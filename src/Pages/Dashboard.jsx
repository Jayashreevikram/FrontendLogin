// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/Images/bg.jpg')] h-screen bg-cover bg-center">
      <h1 className="text-5xl  font-bold text-red-600 mb-6">Welcome to Netflix 🎬</h1>
      <p className="text-lg text-white mb-8">
        You’ve successfully logged in. Enjoy streaming your favorite shows!
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
