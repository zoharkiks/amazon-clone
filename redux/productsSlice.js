import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";

const initialState = {
  allProducts: [],
  isLoading: true,
  product:[]
};

// Reducers
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  () => {
    return commerce.products.list()
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  (prodId) => {
    return commerce.products.retrieve(prodId)
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
    },

      // Get Single Products
      [getProduct.pending]:(state,action)=>{
        state.isLoading=true
      },
      [getProduct.fulfilled]:(state,action)=>{
        state.isLoading=false,
        state.product=action.payload
      },
      [getProduct.rejected]:(state,action)=>{
        state.isLoading=false
      }
  }
});

export default productsSlice.reducer;
