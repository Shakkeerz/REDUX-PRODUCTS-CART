import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: { value: "red" },
  reducers: {
    changeColor: (state, action) => {
    state.value = action.payload.color
    },
  },
});
export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;

