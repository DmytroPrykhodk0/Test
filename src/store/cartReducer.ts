import { createSlice } from "@reduxjs/toolkit";
import type { cartItem } from "../types";

type initialCartState = {
  items: cartItem[];
};

const initialState: initialCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
    if (action.payload.seat.length > 0) {
    action.payload.seat.forEach((seatNumber: number) => {
      const exists = state.items.some(
        (item) => item.id === action.payload.id && item.seat === seatNumber
      );

      if (!exists) {
        state.items.push({
          ...action.payload,
          seat: seatNumber,
        });
      }
    });
  }
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(item => !(item.id === action.payload.id && item.seat === action.payload.seat))      
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
