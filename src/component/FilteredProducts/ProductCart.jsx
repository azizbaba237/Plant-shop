import React from "react";
// card import
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

const ProductCart = ({ id, name, img, text, price }) => {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
             {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
             {price} $
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
           {text}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCart;
