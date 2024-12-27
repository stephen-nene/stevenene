import { useState } from "react";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";

function App() {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} `}>
        <Navbar darkMode={darkMode} setdarkMode={setdarkMode} />
        {/* <div className="  bg-gradient-to-br from-gray-100 to-gray-200 dark:from-fuchsia-950 dark:to-purple-900 min-h- screen p-6"> */}

        <div className="pt-[110px] min-h-screen bg-gradient-to-br from-emerald-500 to-lime-700 dark:from-fuchsia-950 dark:to-purple-950  ">
          {/* <Portfolio /> */}
          <Construction />
        </div>
      </div>
    </>
  );
}

export default App;
