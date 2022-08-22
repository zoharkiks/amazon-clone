import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.total++;
      }
    },
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
});

export const { addToCart, incrementQuantity,decrementQuantity ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
