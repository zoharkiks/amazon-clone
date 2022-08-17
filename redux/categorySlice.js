import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";

const initialState = {
  allCategories: [],
  isLoading: true,
};

// Reducers
export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  () => {
    return commerce.categories.list()
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers:{
    // Get All Categories
    [getAllCategories.pending]:(state,action)=>{
      state.isLoading=true
    },
    [getAllCategories.fulfilled]:(state,action)=>{
      state.isLoading=false,
      state.allCategories=action.payload
    },
    [getAllCategories.rejected]:(state,action)=>{
      state.isLoading=false
    }

  }
});

export default categorySlice.reducer;
