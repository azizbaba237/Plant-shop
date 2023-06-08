import { Button, Tooltip } from "@material-tailwind/react";
import React from "react";
// import useSelector
import { useSelector } from "react-redux";
// import useParams
import { useParams } from "react-router";
// import add to cart
import { addToCart } from "../../features/slices/cartSlices";
// import useDispatch
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="text-white">
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[850px] rounded-lg"
                />
              </div>
              <div className="grow-[3] pl-4">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-white text-xl font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    <div>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Select an option
                      </label>
                      <select className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></select>
                    </div>
                  </div>
                  <Tooltip content="Add to cart" placement="bottom">
                    <Button
                      color="gary"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            img: item.img,
                            text: item.text,
                            name: item.name,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
