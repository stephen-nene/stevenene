import React, { useState } from "react";
import { RefreshCw, Bot } from "lucide-react";
import techJokes from "../../public/jokes.json";


export default function Construction() {
  const [funMessage, setFunMessage] = useState(
    techJokes.techJokes[Math.floor(Math.random() * techJokes.techJokes.length)]
  );

  const handleGenerateMessage = () => {
    const randNumber = Math.floor(Math.random() * techJokes.techJokes.length);
    setFunMessage(techJokes.techJokes[randNumber]);
  }; 
 
  return (
    <div className="mt-20 md:mt-[123px]  p-4">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center ">
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
            <p className="text-center text-gray-700 dark:text-gray-200 text-lg">
              {funMessage}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleGenerateMessage}
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
