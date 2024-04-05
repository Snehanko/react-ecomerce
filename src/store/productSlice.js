import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusCode } from "../util/statusCode";

const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = statusCode.IDLE;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.data = [];
      state.status = statusCode.ERROR;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = statusCode.LOADING;
    });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
});

// export const getProducts = () => {
//   return async function getProductThunk(dispatch, getState) {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       dispatch(fetchProducts(data));
//     } catch (err) {
//       alert("Failure to Fetch data");
//     }
//   };
// };

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
