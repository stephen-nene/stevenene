import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button, message } from "antd";

export default function Navbar({ darkMode, setdarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", to: "Heros" },
    { name: "About Me", to: "AboutMe" },
    { name: "Skills", to: "Skills" },
    { name: "Projects", to: "Projects" },
    { name: "Blogs", to: "Blogs" },
    { name: "Contact", to: "Contact" },
    { name: "More", to: "More" },
  ];
  return (
    <div>
      <div
        className={`
      fixed top-1/4 right-4 z-50
      bg-white/10 backdrop-blur-md
      shadow-2xl transition-all duration-300 ease-in-out
      dark:bg-slate-800/80 dark:shadow-lg dark:shadow-fuchsia-950
      rounded-lg p-4 space-y-4 w-auto min-w-[200px]
      hover:shadow-fuchsia-500 
      dark:hover:shadow-lg dark:hover:shadow-rose-100 
      ${isMenuOpen ? "block" : "hidden lg:b lock"}
    `}
      >
        <ul className="space-y-3">
          {navItems.map((section) => (
            <li key={section.to} className="cursor-pointer relative">
              <ScrollLink
                onClick={() =>
                  message.info(`Adding ${section.name} section soon`, 4)
                }
                to={section.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="!text-blue-600 after:scale-x-100"
                className={`
                block text-gray-700 dark:text-gray-200
                font-medium px-3 py-2 rounded-md
                transition-all duration-300
                hover:text-blue-600 dark:hover:text-blue-400
                relative
                after:absolute after:bottom-0 after:left-0
                after:w-full after:h-0.5
                after:bg-blue-600 dark:after:bg-blue-400
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
              `}
              >
                {section.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <header className="fixed top-10 w-full shadow-md py-4 px-4 sm:px-10 dark:bg-fuchsia-700 bg-white font-[sans-serif] min-h-[70px] tracking-wide z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <div className="flex dark:text-white gap-4">
            <h1 className="md:text-4xl text-xl font-logo2">Stevenene</h1>
          </div>
          <div className="flex max-lg:ml-auto space-x-4">
            <button
              onClick={() => setdarkMode(!darkMode)}
              className="flex gap-2 px-4 py-2 text-sm rounded-full font-bold bg-white border-2 hover:bg-gray-400 transition-all ease-in-out duration-300"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
            <button
              className="lg:hi dden rounded-full bg-white w-10 h-10 flex items-center justify-center border"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {/* Theme Toggle */}
      <div className="fixed dark: bg-fuchsia-500 p-2 top-0 w-full z-50">
        socials here
      </div>
    </div>
  );
}
