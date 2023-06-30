import React from "react";
// import Button
import { Button } from "@material-tailwind/react";
// import image
import pomme from "../../assets/pomme.jpg";
// import filter productd slice
import { filteredProducts } from "../../features/slices/productsSlice";
// import useDispatch
import { useDispatch } from "react-redux";
// import Link
import { Link } from "react-router-dom";

const NavigateButton = () => {
  const buttons = ["Accessoire", "Fruit", "Plante", "Produit"];

  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white grid grid-cols-1 gap-y-2 gap-x-4 sm:gap-y-0 sm:grid-cols-4 mb-4 px-2">
        {buttons.map((button, index) => {
          return (
            <Link key={index} to={"/filteredProducts/" + button} className="sm:flex sm:flex-row sm:justify-center">
              <Button
                color="white"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hover:bg-[#00df9a] w-full sm:w-2/3 duration-300 ease-in-out"
                onClick={() => dispatch(filteredProducts(button))}
              >
                {button}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="bg-[#00df9a] p-2 w-[55%] mx-auto rounded-md md:my-12">
        <h3 className="text-orange-900 text-center text-3xl font-inter font-bold tracking-normal leading-none">
          Latest Products
        </h3>
      </div>
      <div className="flex justify-center items-center py-4 mx-4">
        <img
          className="h-[600px] w[70%] rounded-md shadow-lg shadow-gray-600 "
          src={pomme}
          alt="Pomme"
        />
      </div>
    </>
  );
};

export default NavigateButton;
