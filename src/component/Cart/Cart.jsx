// import cart style
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
//import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
// import remove from caart
import { removeFromCart } from "../../features/slices/cartSlices";

const Cart = ({ openModal, setOpenModal }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            open={openModal}
            handler={() => setOpenModal(false)}
            className="sm:flex sm:flex-col sm:justify-center sm:items-center"
          >
            <div className=" flex justify-center items-center ">
              <DialogHeader className="sm:text-2xl lg:text-3xl text-sm">
                Shopping Bag
              </DialogHeader>
            </div>
            <DialogBody divider>
              {cart.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="lg:grid lg:grid-cols-2 justify-center items-center"
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-md"
                      />
                      <div className="py-2">
                        <h4 className="text-black text-base font-inter font-bold tracking-none leading-none">
                          {item.name}
                        </h4>
                      </div>
                      <div className="pb-2">
                        <p className="text-black text-xs font-inter tracking-none leading-none mx-auto">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-y-1 py-4 lg:py-0 lg:justify-center lg:items-center ">
                        <p className="text-black text-sm font-inter tracking-normal leading-none ">
                          Amount:{" "}
                          <span className="font-bold">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none ">
                          Single Item Price:{" "}
                          <span className="font-bold pl-12 sm:pl-0">
                            {item.price}$
                          </span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none ">
                          Total Item Price:{" "}
                          <span className="font-bold pl-12 sm:pl-0">
                            {item.totalPrice}$
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-y-2 lg:pt-4 pb-4 lg:grid lg:grid-cols-2 md:pb-4 ">
                        <Tooltip
                          content="Remove from the cart"
                          placement="bottom"
                        >
                          <Button
                            size="sm"
                            ripple={true}
                            variant="filled"
                            className="bg-[#00df9a] text-black lg:ml-6"
                          >
                            Buy now
                          </Button>
                        </Tooltip>
                        <Tooltip
                          content="Remove from the cart"
                          placement="bottom"
                        >
                          <Button
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                            className="lg:mx-4 "
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className=" flex justify-center items-center">
              <p className="text-black text-sm font-inter tracking-normal leading-none ">
                Total Price of All Products:{" "}
                <span className="font-bold">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            open={openModal}
            handler={() => setOpenModal(false)}
            className="border-0 outline-0 flex flex-col justify-center items-center"
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div className="gap-y-4 flex flex-col justify-center items-center">
                <h1 className="text-black text-sm lg:text-3xl font-inter font-bold tracking-none leading-none">
                  Your bag is empty
                </h1>
                <p className="text-black text-base font-inter tracking-none leading-none">
                  Add some product
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </>
  );
};

export default Cart;
