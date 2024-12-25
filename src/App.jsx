import React from "react";
import Header from "./Component/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productsdetailes from "./Pages/Productsdetailes/Productsdetailes";
import Cart from "./Pages/Cart/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/productsdetailes"
            element={<Productsdetailes />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
