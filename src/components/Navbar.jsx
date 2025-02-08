import {
  Home,
  User,
  Settings,
  Briefcase,
  FileText,
  Phone,
  MoreHorizontal,
} from "lucide-react";
import { SiDailydotdev, SiWhatsapp } from "react-icons/si";

import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  FileTextOutlined,
  PhoneOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button, message } from "antd";

import { Github, Linkedin, Twitter, Mail, Hash, Instagram } from "lucide-react";

export default function Navbar({ darkMode, setdarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const navItems = [
  //   { name: "Home", to: "Heros", icon: <AiOutlineHome /> },
  //   { name: "Me", to: "AboutMe", icon: <AiOutlineUser /> },
  //   { name: "Skills", to: "Skills", icon: <AiOutlineSetting /> },
  //   { name: "Projects", to: "Projects", icon: <AiOutlineProject /> },
  //   { name: "Blogs", to: "Blogs", icon: <AiOutlineFileText /> },
  //   { name: "Contact", to: "Contact", icon: <AiOutlinePhone /> },
  //   { name: "More", to: "More", icon: <AiOutlineMore /> },
  // ];

  const navItems = [
    { name: "Home", to: "Heros", icon: <Home /> },
    { name: "Me", to: "AboutMe", icon: <User /> },
    { name: "Skills", to: "Skills", icon: <Settings /> },
    { name: "Projects", to: "Projects", icon: <Briefcase /> },
    { name: "Blogs", to: "Blogs", icon: <FileText /> },
    { name: "Contact", to: "Contact", icon: <Phone /> },
    { name: "More", to: "More", icon: <MoreHorizontal /> },
  ];
  const socials = [
    {
      icon: <Github />,
      href: "https://github.com/stephen-nene",
      label: "GitHub",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/stevenene",
      label: "LinkedIn",
    },
    {
      icon: <Twitter />,
      href: "https://x.com/hackerOnBird",
      label: "Twitter",
    },
    {
      icon: <SiDailydotdev size={25} />,
      href: "https://app.daily.dev/stevonene",
      label: "daily.dev",
    },
    { icon: <Mail />, href: "mailto:stevekid705@gmail.com", label: "Email" },
    // { icon: <Instagram />, href: "#", label: "Instagram" },
    {
      icon: <SiWhatsapp size={23} />,
      href: "https://wa.me/254741780970",
      label: "Whatsapp",
    },
  ];

  return (
    <div>
      <div
        className={`
      fixed top-1/3 right-4 z-50
      bg-white/10 backdrop-blur-md
      shadow-sm transition-all duration-300 ease-in-out
      dark:bg-slate-950/70 dark:shadow-lg dark:shadow-fuchsia-950
      rounded-lg p-4 space-y-4 w-auto min-w -[200px]
      hover:shadow-fuchsia-500 
      dark:hover:shadow-sm dark:hover:shadow-rose-100 
      ${isMenuOpen ? "block" : "hidden lg:b lock"}
    `}
      >
        <ul className="space-y-3">
          {navItems.map((section) => (
            <li key={section.to} className="flex cursor-pointer relative">
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
                   text-gray- dark:text-gray-200
                  font-medium px-1 py-2 rounded-md
                  transition-all duration-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  relative block
                  after:absolute after:bottom-0 after:left-0
                  after:w-full after:h-0.5
                  after:bg-blue-600 dark:after:bg-blue-400
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  `}
              >
                <div className="flex gap-3 ">
                  {section.icon}
                  {section.name}
                </div>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="fixed dark:bg-f uchsia-500/90 backdrop-blur-sm p-2 top-0 w-full z-50 shadow-lg">
        <div className="flex items-center justify-center gap-4 flex-wrap max-w-6xl mx-auto px-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="__blank"
              title={label}
              className=" dark:text-white hover:scale-110 hover:text-fuchsia-600 dark:hover:text-emerald-300 transition-all duration-200"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <header className="fixed top-10 w-full shadow-md py-4 px-4 sm:px-10 dark:bg-fuchsia-700 bg-white font-[sans-serif] min-h-[70px] tracking-wide z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <div className="flex dark:text-white gap-4">
            <h1 className="cursor-pointer md:text-4xl text-3xl hover:text-emerald-600 font-logo2">
              Stevenene
            </h1>
          </div>
          <div className="flex max-lg:ml-auto space-x-4">
            <button
              onClick={() => setdarkMode(!darkMode)}
              className="flex gap-2 px-4 py-2 text-sm rounded-full font-bold bg-fuchsia-300 dark:bg-green-300 border-2 dark:hover:bg-green-500 hover:bg-fuchsia-500 transition-all ease-in-out duration-300"
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
    </div>
  );
}
