import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineFile } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function DashBoard() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", to: "/" },
    { title: "Product", to: "/dashboard/product" },
    // { title: "Account", to: "account", gap: true },
    // { title: "Schedule", to: "Schedule" },
    // { title: "Search", to: "Search" },
    // { title: "Analytics", to: "Analytics" },
    // { title: "Filies", to: "Filies", gap: true },
    // { title: "Setting", to: "Setting" },
  ];

  const iconMap = [
    BiHomeAlt,
    FaUsers,
    MdAccountCircle,
    SlCalender,
    BsSearch,
    SiSimpleanalytics,
    AiOutlineFile,
    FiSettings,
  ];

  return (
    <div className="flex snap-none">
      <div className="flex flex-col justify-between p-1 pt-8 bg-green-500 relative h-screen ">
        <div className={` ${open ? "w-72" : "w-20"} duration-300  `}>
          <IoIosArrowDropright
            className={`w-7 h-7 cursor-pointer absolute -right-4 top-10 text-white ${
              open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              alt="Plant Shop"
              className={` cursor-pointer duration-500 w-6 h-6 bg-black p-1 ml-2 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={` origin-left font-medium text-xl duration-300 italic ${
                !open && "scale-0"
              } `}
            >
              Plant Shop
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => {
              const Icones = iconMap[index];
              return (
                <Link
                  key={index}
                  to={menu.to}
                  className={`text-medium font-medium flex items-center gap-x-4 cursor-pointer p-2 mx-2 hover:bg-white rounded-md ${
                    menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-white"} `}
                >
                  <Icones />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className=" flex justify-center items-center ">
          <button
            className={` bg-white rounded-md hover:bg-red-100 ${
              !open ? "px-3" : "px-28"
            } `}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="p-7 text-2xl  font-semibold flex-1 h-screen ">
        <h1 className="text-white"> Dashbord </h1>
      </div>
    </div>
  );
}

export default DashBoard;
