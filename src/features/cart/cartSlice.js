import { createSlice } from "@reduxjs/toolkit";

let cart = [];
const ls = localStorage.getItem("camping-store-cart");
if (ls) {
  cart = JSON.parse(ls);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: cart,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    deleteFromCart: (state, action) => {
      return state.filter(
        (item) => item.product._id.toString() !== action.payload.toString()
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
