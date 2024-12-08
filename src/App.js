import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react";
 
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Cat Facts</h1>
        <button 
          onClick={fetchCatFact} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Generate Cat Fact
        </button>
        <p className="mt-4 text-gray-700">{catFact}</p>
      </div>
    </div>
  );
}

export default App;
