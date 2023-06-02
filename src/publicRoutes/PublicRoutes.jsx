import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Product from "../pages/Product";
import Home from "../pages/Home";
// import Login from "../auth/Login";
import Layout from "../component/Layout";
// import AuthGuard from '../auth/AuthGuard'
// import DashBoard from "../pages/Dashboard";
// import ReadProduct from "../pages/crud/ReadProduct";
import AllPlant from "../pages/AllPlant"

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<AuthGuard><DashBoard/></AuthGuard>} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/product/:_id" element={<ReadProduct />} /> */}
        <Route path="/product" element={<AllPlant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
export default PublicRoutes;
