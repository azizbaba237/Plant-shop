// imp[ort create slice
import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    // add to cart
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            name: productId.name,
            text: productId.text,
            img: productId.img,
            amount: 1,
            totalPrice: productId.price,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    // Remove to cart
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) => product.id !== productId.id
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlices.actions;
export default cartSlices.reducer;
