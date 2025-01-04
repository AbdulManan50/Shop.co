import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Slice";
import wishlistreducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    wishlist: wishlistreducer,
  },
});

export default store;
