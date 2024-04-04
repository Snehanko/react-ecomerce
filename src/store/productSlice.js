import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: [],
  loading: true,
  error: null,
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
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.data = [];
      state.error = action.payload;
      state.loading = true;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
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
