import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state) => {
      state.cartCount = 1;
    },
    increment: (state, action) => {
      state.cartList.push({ ...action.payload });
    },
    decrement: (state,action) => {
      state.cartList.pop({
        ...action.payload
    })
    },
  },
});
export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
