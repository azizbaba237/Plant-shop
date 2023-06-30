import React from "react";
// import logo
import logo from "../../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className=" h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="pb-2">
          <img src={logo} alt="logo" className="h-6" />
        </div>
        <div className="mx-6">
          <span className="text-white text-sm font-inter no-underline normal-case">
            Copyright © {year} page by ABDOUL AZIZ BABA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
