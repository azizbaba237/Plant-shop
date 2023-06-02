import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Product", to: "/product", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
  { name: "Login", to: "/login", current: true },
  { name: "Sign up", to: "/dashboard", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="w-40 h-40 flex justify-center items-center space-x-2">
        <img src={logo} alt="logo" className="w-6 h-6 " />
        <h2 className="w-full font-bold text-[#00df9a]">Plant-Shop</h2>
      </div>
      <div className="md:flex hidden">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.current
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineCloseSquare className=" w-12 h-6 text-red-500"  />
        ) : (
          <BiMenu className="w-12 h-6"/>
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-1xl font-bold m-4 text-[#00df9a]">
          PLANT-SHOP.
        </h1>
        <ul className=" uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
