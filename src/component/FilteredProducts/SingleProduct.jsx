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
// import footer
import Footer from "../Footer/Footer";

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
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center sm:gap-x-6 lg:gap-x-32 px-4 pt-40"
            >
              <div className=" grow-[2] mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="sm:h-[600px] h-[400px] rounded-lg"
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg flex flex-col justify-center items-center">
                  <div className=" flex flex-col justify-center items-center sm:justify-start sm:items-start">
                    <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-2">
                      {item.name}
                    </h5>
                    <p className="text-orange-700 text-xl font-bold tracking-normal leading-none pb-2">
                      15% OFF
                    </p>
                    <p className="text-white text-sm font-medium sm:font-bold sm:text-xl tracking-normal leading-none pb-4">
                      {item.text}
                    </p>
                  </div>
                  <Tooltip content="Add to cart" placement="bottom">
                    <Button
                      className="mb-8 w-full hover:bg-[#00df9a]"
                      color="white"
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
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default SingleProduct;
