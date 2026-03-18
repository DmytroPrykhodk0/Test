import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import type { cartItem } from '../types'


type CartState = {
  items: cartItem[]
}

type PreloadedState = {
  cart: CartState
}


function loadFromLocalStorage():PreloadedState  | undefined {
  try {
    const data = localStorage.getItem("cart")
    return data ? JSON.parse(data) : undefined
  } catch (e:unknown) {
    if(e instanceof Error)
    {
        return undefined
    }
  }
}



function saveToLocalStorage(state:RootState) {
  try {
    localStorage.setItem('cart', JSON.stringify(state))
  } catch (e) {
    console.log(e)
  }
}



const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
    preloadedState: loadFromLocalStorage(),
})



store.subscribe(() => {
   saveToLocalStorage(store.getState())
})

export default store
export type RootState = ReturnType<typeof store.getState>