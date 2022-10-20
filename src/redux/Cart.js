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
        console.log(action.payload.id)
        const checkProductId = state.cartList.filter((item)=> item.id === action.payload.id)
        
      if(checkProductId){
        state.cartList.push({ ...action.payload, count: ++state.cartCount });
        console.log(action.payload)
    }
    },
    decrement: (state, action) => {
      state.cartList.pop({
        ...action.payload,
        count: --state.cartCount,
      });
    },
    removeCart: (state, action) => {
      console.log(action.payload);
      const filteredCart = state.cartList.filter(
        (cart) => cart.id !== action.payload
      );
      state.cartList = filteredCart;
    },
  },
});
export const { addToCart, increment, decrement, removeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
