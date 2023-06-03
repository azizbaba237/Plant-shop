import React from "react";
// import useSelector
import { useSelector } from "react-redux";
//import useParams
import { useParams } from "react-router";
import ProductCart from "./ProductCart";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div className="text-white">
      <div className="pt-16">
        <div className="pl-14">
          <h1
            className="text-4xl font-inter text-white font-bold tracking-normal leading-none
"
          >
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-center items-center py-8 gap-12 ">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
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
      </div>
    </div>
  );
};

export default FilteredProducts;
