import { configureStore } from "@reduxjs/toolkit";
// import slider slice
import sliderReducer from "../features/slices/SliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
;
