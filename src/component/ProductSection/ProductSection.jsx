import React from "react";
// import sotre data
import { storeData } from "../../data/plantLists";
import ProductSectionItem from "./ProductSectionItem";

function ProductSection() {
  return (
    <>
      <div className="bg-[#00df9a] p-2 w-[55%] mx-auto rounded-md mt-4 ">
        <h3 className="text-orange-900 text-center text-3xl font-inter font-bold tracking-normal leading-none">
          PROMOTION
        </h3>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2 lg:grid-cols-4 mx-auto py-8 px-2 sm:gap-y-4 gap-y-6">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <ProductSectionItem
              key={index}
              id={product.id}
              img={product.img}
              name={product.name}
              text={product.text}
              price={product.price}
              totalPrice={product.totalPrice}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductSection;
