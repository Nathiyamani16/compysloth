
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, color, amount, product } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id + color);

      if (existingItem) {
        state.cart = state.cart.map((item) => {
          if (item.id === id + color) {
            const newAmount = Math.min(item.amount + amount, item.max);
            return { ...item, amount: newAmount };
          }
          return item;
        });
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        state.cart.push(newItem);
      }
    },
    // removeCartItem(state, action) {
    //   state.cart = state.cart.filter((item) => item.id !== action.payload);
    // },
    // toggleCartItemAmount(state, action) {
    //   const { id, value } = action.payload;
    //   state.cart = state.cart.map((item) => {
    //     if (item.id === id) {
    //       if (value === 'inc') {
    //         const newAmount = Math.min(item.amount + 1, item.max);
    //         return { ...item, amount: newAmount };
    //       }
    //       if (value === 'dec') {
    //         const newAmount = Math.max(item.amount - 1, 1);
    //         return { ...item, amount: newAmount };
    //       }
    //     }
    //     return item;
    //   });
    // },
    // clearCart(state) {
    //   state.cart = [];
    // },
    // countCartTotals(state) {
    //   const totals = state.cart.reduce(
    //     (acc, item) => {
    //       acc.total_items += item.amount;
    //       acc.total_amount += item.price * item.amount;
    //       return acc;
    //     },
    //     { total_items: 0, total_amount: 0 }
    //   );
    //   state.total_items = totals.total_items;
    //   state.total_amount = totals.total_amount;
    // },
  },
});


export const {
  addToCart,
  removeCartItem,
  toggleCartItemAmount,
  clearCart,
  countCartTotals,
} = cartSlice.actions;


export default cartSlice.reducer;
