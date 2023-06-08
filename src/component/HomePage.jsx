import React from "react";
import Slider from "./slider/Slider";
import NavigateButton from "./navigateButtons/Navigatebuttons";
import ProductSection from "./ProductSection/ProductSection";
import Footer from "./Footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <NavigateButton />
      <ProductSection/>
      <Footer/>
    </div>
  );
};
export default HomePage;
