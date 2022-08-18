import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const itemInCart=state.cartItems.find((item)=>item.id === action.payload.id);
      if(itemInCart){
        itemInCart.quantity++
      } else{
        state.cartItems.push({...action.payload, })
state.total++

      }
    }
  }
});

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer;