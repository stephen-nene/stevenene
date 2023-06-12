import React from "react";
// import Logo from "../assets/logo.svg";
import { FcCommandLine } from "react-icons/fc";

const Header = () => {
  return (
    <div className=" bg-gray-700  py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="#home">
            <h3>Stephen Nene</h3>
            {/* <img src={Logo} alt="Logo" /> */}
            <FcCommandLine />
          </a>

          <button className="btn btn-sm">Work With me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
