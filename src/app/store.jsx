import { configureStore } from "@reduxjs/toolkit";
// import slider slice
import sliderReducer from "../features/slices/SliderSlice";
// import product slice
import productsReducer from "../features/slices/productsSlice";
// import cart reducer
import cartReducer from "../features/slices/cartSlices";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
