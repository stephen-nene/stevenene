import React, { useState, useEffect } from "react";
import { RefreshCw, Bot } from "lucide-react";
import techJokes from "../../assets/data/jokes.json"; // Local fallback JSON

export default function Construction() {
  const [funMessage, setFunMessage] = useState("Fetching a joke...");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(false); // Reset error state
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();

      setFunMessage(data.value); 
    } catch (error) {
      setError(true); 
      const fallbackJoke =
        techJokes.techJokes[
          Math.floor(Math.random() * techJokes.techJokes.length)
        ];
      setFunMessage(fallbackJoke);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke when the component mounts
  }, []);

  return (
    <div className="mt-20 md:mt-[123px] p-4">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
        {/* Animated Cogwheel */}
        <div className="relative mb-8 group">
          <img
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            className="h-40 animate-spin-slow transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-fuchsia-500/10 rounded-full filter blur-xl animate-pulse" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 dark:text-white">
          🔧 Currently Building … 🛠️
        </h1>

        {/* Joke Display */}
        <div className="relative mb-8 w-full max-w-2xl">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            {loading ? (
              <p className="text-center text-gray-700 dark:text-gray-200 text-lg">
                Loading...
              </p>
            ) : (
              <>
                <p className="text-center text-gray-700 dark:text-gray-200 text-lg">
                  {funMessage}
                </p>
                {error && (
                  <p className="text-center text-red-500 text-sm mt-2">
                    ⚠️ Network error! Showing a fallback joke.
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={fetchJoke}
            className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Bot size={20} />
            Next Joke
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg dark:text-white dark:border-white"
          >
            <RefreshCw size={20} />
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
