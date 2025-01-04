import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addtowishlist: (state, action) => {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push(product);
        console.log(product);
      }
    },
    removewishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addtowishlist, removewishlist } = wishlist.actions;
export default wishlist.reducer;
