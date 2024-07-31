import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import cartReducer from './cartSlice';
// import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    // filter:filterReducer,
  },
});

