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
        <div className="p mt-[110px]">
          {/* <Portfolio /> */}
          <Construction />
        </div>
      </div>
    </>
  );
}

export default App;
