import { useState } from "react";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar";
import Construction from "./components/pages/Construction";

import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} `}>
        <Navbar darkMode={darkMode} setdarkMode={setdarkMode} />

        <div className="pt-[110px] min-h-screen bg-gradient-to-br from-emerald-500 to-lime-700 dark:from-fuchsia-950 dark:to-purple-950  ">
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
            <Route path="/construction" element={<Construction />} />
            {/* <Route path="/project/:id" element={<About />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          {/* <Construction /> */}
        </div>
      </div>
    </>
  );
}

export default App;
