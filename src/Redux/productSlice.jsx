
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  single_product: {},
  cartproduct: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {


    setSingleProduct: (state, action) => {
      state.single_product = action.payload;
    },
    addCart: (state, { payload }) => {
      const priviousCart = [...state.cartproduct];
      const isExistedIndex = priviousCart.findIndex((curr) => curr.id === payload?.id)
      let newCart = {
        id: payload?.product?.id,
        name: payload?.product?.name,
        image: payload?.product?.images?.[0]?.url,
        quantity: payload?.quantity,
        price: payload?.product?.price,
        subtotal: Number(payload?.product?.price) * payload?.quantity,
        color: payload?.color,
      }
      if (isExistedIndex === -1) {
        state.cartproduct = [newCart, ...priviousCart]
      }
      else {
        const updatedCart = priviousCart.map((item, index) =>
          index === isExistedIndex
            ? { ...item, quantity: item.quantity + payload?.quantity, subtotal: (item.price || 0) * (payload?.quantity || 0) }
            : item
        );
        state.cartproduct = updatedCart;
      }
    },
    incQuantity: (state, { payload }) => {
      const priviousCart = [...state.cartproduct];
      const isExistedIndex = priviousCart.findIndex((curr) => curr.id === payload?.id)

      const updatedCart = priviousCart.map((item, index) =>
        index === isExistedIndex
          ? { ...item, quantity: item.quantity + 1, subtotal: (item.price || 0) * ((payload?.quantity) + 1 || 0) }
          : item
      );
      state.cartproduct = updatedCart;
      console.log(payload);
    },
    decrQuantity: (state, { payload }) => {
      const priviousCart = [...state.cartproduct];
      const isExistedIndex = priviousCart.findIndex((curr) => curr.id === payload?.id)

      const updatedCart = priviousCart.map((item, index) =>
        index === isExistedIndex
          ? { ...item, quantity: item.quantity - 1, subtotal: (item.price || 0) * ((payload?.quantity) - 1 || 0) }
          : item
      );
      state.cartproduct = updatedCart;
      console.log(payload);
    },
    removeProduct: (state, { payload }) => {
      const priviousCart = [...state.cartproduct];
      const updatedCart = priviousCart.filter((curr) => curr.id !== payload?.id);

      state.cartproduct = updatedCart;
    },


  },
});

export const {
  setSingleProduct,
  addCart,
  incQuantity,
  decrQuantity,
  removeProduct
} = productsSlice.actions;

export default productsSlice.reducer;




