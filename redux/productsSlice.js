import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";

const initialState = {
  allProducts: [],
  isLoading: true,
};

// Reducers
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  () => {
    return commerce.products.list()
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers:{
    // Get All Products
    [getAllProducts.pending]:(state,action)=>{
      state.isLoading=true
    },
    [getAllProducts.fulfilled]:(state,action)=>{
      state.isLoading=false,
      state.allProducts=action.payload
    },
    [getAllProducts.rejected]:(state,action)=>{
      state.isLoading=false
    }

  }
});

export default productsSlice.reducer;
