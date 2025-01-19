import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Slice";
import wishlistreducer from "./wishlistSlice";
import addtocartItemreducer from "./AddtocartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    wishlist: wishlistreducer,
    cart: addtocartItemreducer,
  },
});

export default store;
