import React, { useEffect, useState } from "react";
//import logo
import logo from "../assets/logo.png";
// import icons
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
// import cart comoponent
import Cart from "../component/Cart/Cart";
// import useSelector
import { useSelector } from "react-redux";
// import Link
import { Link } from "react-router-dom";

const Navbar = () => {
  // select total amount
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  //scroll state
  const [isActive, setIsActive] = useState(false);

  // envent listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    });
  });

  // For the cart
  const [openMod, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div
      className={`${
        isActive ? "shadow-md" : "bg-none "
      } fixed w-full z-10 transition-all h-screen `}
    >
      <div className="flex justify-around items-center bg-white p-4 md:py-4">
        <Link to={"/"} className="flex items-center cursor-pointer ">
          <img src={logo} alt="store" className="h-6 w-6" />
          <h3 className="text-[#00df9a] font-inter font-semibold md:text-2xl tracking-normal leading-none">
            Plant-Shop
          </h3>
        </Link>
        <div className="flex flex-row items-center ">
          <button className="text-black font-inter text-base font-bold tracking-normal leading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row items-center">
            <AiOutlineHeart className="text-black h-6 w-6" />
            <p className="font-inter text-sm md:text-base text-black font-medium tracking-normal leading-none text-center mr-4">
              Wish List
            </p>
          </div>
          <div className="flex flex-row items-center">
            <button
              className="flex justify-center items-center"
              onClick={handleOpen}
            >
              {totalAmount > 0 ? (
                <span className="rounded-full bg-red-500 px-2 font-inter text-sm mr-1">
                  {totalAmount}
                </span>
              ) : (
                <FiShoppingCart className="text-black h-6 w-6" />
              )}
              <p className="font-inter md:pl-1 text:sm md:text-base text-black md:font-medium tracking-normal leading-none text-center ">
                Shopping bag
              </p>
              {openMod && <Cart openModal={openMod} setOpenModal={setOpen} />}
            </button>
          </div>
        </div>
      </div>
      <div className="pl-4 py-4 md:py-4 w-full flex justify-around bg-[#00df9a]">
        <div className="font-inter md:text-base text-black font-medium tracking-normal leading-none text-center">
          50%
        </div>
        <div className="font-inter md:text-base text-black font-medium tracking-normal leading-none text-center">
          Free shipping and return
        </div>
        <div className="font-inter md:text-base text-black font-medium tracking-normal leading-none text-center">
          Different payment methods
        </div>
      </div>
    </div>
  );
};

export default Navbar;
