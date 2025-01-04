import React from "react";
import Header from "./Component/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productsdetailes from "./Pages/Productsdetailes/Productsdetailes";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/productsdetailes"
              element={<Productsdetailes />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
