import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center container mx-auto h-12 px-4 absolute top-0 left-0 right-0 z-10">
      <a href="#" className="text-3xl font-bold text-[#2980b9]">
        <h1>REACT.</h1>
      </a>
      <ul className="flex hidden md:flex">
        <li className="p-7 font-medium">
          <a href="#">Home</a>
        </li>
        <li className="p-7 font-medium">
          <a href="#">About</a>
        </li>
        <li className="p-7 font-medium">
          <a href="#">Services</a>
        </li>
        <li className="p-7 font-medium">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 bg-[#000300] w-[50%] h-full border-r border-r-gray-600 left-[-100%] z-20"
            : "fixed top-0 left-0 bg-[#000300] w-[50%] h-full border-r border-r-gray-600 ease-in-out duration-500 z-20"
        }
      >
        <a href="#" className="text-3xl font-bold text-[#2980b9] m-4 block">
          <h1>REACT.</h1>
        </a>
        <ul className="p-4 uppercase">
          <li className="p-4 font-medium border-b border-b-gray-600">
            <a href="#">Home</a>
          </li>
          <li className="p-4 font-medium border-b border-b-gray-600">
            <a href="#">About</a>
          </li>
          <li className="p-4 font-medium border-b border-b-gray-600">
            <a href="#">Services</a>
          </li>
          <li className="p-4 font-medium">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
