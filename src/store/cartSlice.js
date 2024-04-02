import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { addProducts, removeProduct } = cartSlice.actions;
