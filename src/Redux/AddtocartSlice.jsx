import { createSlice } from "@reduxjs/toolkit";

const addtocartItem = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const product = action.payload;
      const existingItem = state.item.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...product, quantity: 1 });
        console.log("helllo :");
      }
    },
    removecart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    updatequantity: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id); 
      if (item) {
        item.quantity = action.payload.quantity; 
      }
    },
  },
});

export const { addtocart, removecart, updatequantity } = addtocartItem.actions;

export default addtocartItem.reducer;
