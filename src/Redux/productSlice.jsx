import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isSidebarOpen: true,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_error: false,
  single_product: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.featured_products = action.payload.filter((product) => product.featured === true);
    },
    getProductsError: (state) => {
      state.products_error = true;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  getProductsSuccess,
  getProductsError,
} = productsSlice.actions;

export default productsSlice.reducer;
