// 1.provider
// 2.store
// 3.reducer
// 4. action
import products from "../api/products.json";
import { createSlice } from "@reduxjs/toolkit";

// store
// Action=> btn clicked
// Reducer -> state updata
// provider
const INITIAL_STATE = {
  cartList: [products],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    // the following functions are actions
    addToCart: (state,action) => {
      state.cartList.push({
        ...action.payload,
        count: 1,
      });
      console.log(state.cartList)
    },
    increment: (state, action) => {
      const productID = action.payload.id;
      state.cartList.push({
        
      })
      console.log(state);
      console.log(productID);
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
  },
});
console.log("cartSlice", createSlice);
export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
