import React, { useState } from "react";
// import cart
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
  IconButton,
} from "@material-tailwind/react";
//import icon
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import useDispatch
import { useDispatch } from "react-redux";
// import add to cart
import addToCart from "../../features/slices/cartSlices";

function ProductSectionItem({ id, img, name, text, price, totalPrice }) {
  const dispatch = useDispatch();
  const [favorited, setFavorited] = useState(false);
  const ToggleFavorite = () => {
    setFavorited((prev) => !prev);
  };
  return (
    <>
      <Card className="relative">
        <div
          className="absolute sm:top-7 sm:-left-20 left-56 top-[58%]"
          onClick={ToggleFavorite}
        >
          {favorited ? (
            <IconButton variant="text">
              <AiFillHeart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
            </IconButton>
          ) : (
            <IconButton variant="text">
              <AiOutlineHeart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
            </IconButton>
          )}
        </div>
        <CardHeader floated={false} className="lg:h-96 sm:h-64">
          <img
            src={img}
            alt={name}
            className="lg:h-full lg:w-full sm:h-full sm:w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="sm:mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {text}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center sm:gap-7 md:pt-8 -mt-10 lg:pt-8">
          <Tooltip content="Add to cart " placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    name: name,
                    price: price,
                    totalPrice: totalPrice,
                  })
                )
              }
            >
              Add to cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductSectionItem;
