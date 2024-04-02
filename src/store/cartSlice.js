import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { addProducts } = cartSlice.actions;
