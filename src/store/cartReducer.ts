import { createSlice } from '@reduxjs/toolkit'
import type { cartItem } from '../types'



type initialCartState = {
  items: cartItem[];
};


const initialState: initialCartState = {
  items: [],
};

const cartSlice  = createSlice({
  name: 'cart',
  initialState,
  reducers: {
          addCartItem: (state, action) => {
            const exists = state.items.some(item => item.id === action.payload.id && item.seat[0] === action.payload.seat[0]);
 
            console.log(action.payload.id,  action.payload.seat[0])
        if (!exists) {
          state.items.push(action.payload);
        }
    },
    removeCartItem: (state, action) => {
        state.items = state.items.filter(item => !(item.id === action.payload.id && item.seat[0] === action.payload.seat))
    },
  }
})


export const { addCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer