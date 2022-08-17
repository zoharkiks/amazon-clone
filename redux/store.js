import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productsReducer,
    category:categoryReducer
  },
});