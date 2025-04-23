import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-800">🐱 Cat Facts</h1>

        <button
          onClick={fetchCatFact}
          className="bg-red-500 text-white px-5 py-2 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
        >
          Generate Cat Fact
        </button>

        <p className="mt-6 text-gray-700 text-lg transition-all duration-300 ease-in-out">
          {catFact}
        </p>
      </div>
    </div>
  );
}

export default App;
