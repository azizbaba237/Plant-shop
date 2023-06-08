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
      <div className="flex items-center justify-around py-12">
        <div>
            <img src={logo} alt="logo" className="h-12"/>
        </div>
        <div>
           <p className="text-white text-sm font-inter no-underline normal-case">
            Copyright &copy  {year} page by ABDOUL AZIZ BABA front-end dev 
           </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
