import React from "react";
// import cart
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
// import useDispatch
import { useDispatch } from "react-redux";
// import add to cart
import addToCart from "../../features/slices/cartSlices";

function ProductSectionItem({ id, img, name, text, price, totalPrice }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="w-96 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute top-12 right-8 -rotate-45 z-10 text-red-700"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {text}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
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
    </div>
  );
}

export default ProductSectionItem;
