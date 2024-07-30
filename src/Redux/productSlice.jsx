
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: true,
  products: [],
  featured_products: [],
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
      state.featured_products = action.payload.filter((product) => product.featured);
    },

    setSingleProduct: (state, action) => {
      state.single_product = action.payload;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  getProductsSuccess,
  getProductsError,
  setSingleProduct,
} = productsSlice.actions;

export default productsSlice.reducer;




