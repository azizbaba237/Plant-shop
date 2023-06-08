import React from "react";
// import sotre data
import { storeData } from "../../data/plantLists";
import ProductSectionItem from "./ProductSectionItem";

function ProductSection() {
  return (
    <div >
      <div className="bg-[#00df9a] p-2 w-[55%] mx-auto rounded-md my-12 ">
        <h3 className="text-orange-900 text-center text-3xl font-inter font-bold tracking-normal leading-none">
          PROMOTION
        </h3>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-4 py-8 max-w-7xl ml-[12%]">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                img={product.img}
                name={product.name}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
