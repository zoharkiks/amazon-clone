import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";

const initialState = {
  cart: {},
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// Reducers
export const getCart = createAsyncThunk("cart/getCart", () => {
  return commerce.cart.retrieve();
});

export const addItem = createAsyncThunk("cart/addItem", (id) => {
  return commerce.cart.add(id, 1);
});



const cartSlice = createSlice({
  name: "cart",
  initialState,

  extraReducers: {
    // Get Cart
    [getCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCart.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.cart = action.payload);
    },
    [getCart.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // Add Item To Cart
    [addItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addItem.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.cart = action.payload);
    },
    [addItem.rejected]: (state, action) => {
      state.isLoading = false;
    },
    
  },
});


export default cartSlice.reducer;
