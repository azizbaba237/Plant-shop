// import create slice
import { createSlice, configureStore } from "@reduxjs/toolkit";
// import data
import { storeData } from "../../data/plantLists";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  },
  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        console.log("filter", filter);
        const saveState = JSON.stringify(filter)
        sessionStorage.setItem("filteredData", saveState)
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
