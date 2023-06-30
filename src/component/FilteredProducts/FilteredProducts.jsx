import React from "react";
// import useSelector
import { useSelector } from "react-redux";
//import useParams
import { useParams } from "react-router";
// import product cart
import ProductCart from "./ProductCart";
// import footer
import Footer from "../Footer/Footer";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div className="text-white pt-36 ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-4xl font-inter text-white font-bold tracking-normal leading-none sm:py-6 lg:py-6">
          {type}
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index} className="p-4 sm:gap-x-2 lg:gap-x-2 lg:py-6">
                <ProductCart
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                />
              </div>
            );
          })}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default FilteredProducts;
