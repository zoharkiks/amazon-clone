import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";




const initialState = {
  cart:{},
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// Reducers
export const getCart = createAsyncThunk(
  "cart/getCart",
  () => {
    return commerce.cart.retrieve()
  }
);

export const addItem = createAsyncThunk(
  "cart/addItem",
  (id,quantity) => {
    return commerce.cart.add(id, 1)
  }
);

// export const increaseQuantity = createAsyncThunk(
//   "cart/increaseQuantity",
//   (id,quantity) => {
//     commerce.cart.update(id, { ...quantity,quantity:quantity++})
//   }
// );



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    incrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      itemInCart.quantity--;
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = removeItem;
    },
  },
  extraReducers:{
    // Get Cart
    [getCart.pending]:(state,action)=>{
      state.isLoading=true
    },
    [getCart.fulfilled]:(state,action)=>{
      state.isLoading=false,
      state.cart=action.payload
    },
    [getCart.rejected]:(state,action)=>{
      state.isLoading=false
    },
    // Add Item To Cart
    [addItem.pending]:(state,action)=>{
      state.isLoading=true
    },
    [addItem.fulfilled]:(state,action)=>{
      state.isLoading=false,
      state.cart=action.payload
    },
    [addItem.rejected]:(state,action)=>{
      state.isLoading=false
    },
    //  // Increase Quantity
    //  [increaseQuantity.pending]:(state,action)=>{
    //   state.isLoading=true
    // },
    // [increaseQuantity.fulfilled]:(state,action)=>{
    //   state.isLoading=false,
    //   state.cart=action.payload
    // },
    // [increaseQuantity.rejected]:(state,action)=>{
    //   state.isLoading=false
    // },
  }
});

export const { addToCart, incrementQuantity,decrementQuantity ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
