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
  const buttons = ["Fruit", "Plante", "Accessoire", "Produit"];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-white flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="white"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-[#00df9a] duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-[#00df9a] p-2 w-[55%] mx-auto rounded-md ">
        <h3 className="text-orange-900 text-center text-3xl font-inter font-bold tracking-normal leading-none">
          Latest Products
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w[70%] rounded-md shadow-lg shadow-gray-600 "
          src={pomme}
          alt="Pomme"
        />
      </div>
    </div>
  );
};

export default NavigateButton;
