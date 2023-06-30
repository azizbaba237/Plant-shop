import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FilteredProducts from "../component/FilteredProducts/FilteredProducts";
import SingleProduct from "../component/FilteredProducts/SingleProduct";
import Navbar from "../navbar/Navbar";


export const PublicRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
        <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};
export default PublicRoutes;
