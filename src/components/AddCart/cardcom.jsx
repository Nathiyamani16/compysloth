// src/components/CartComponent.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeCartItem, toggleCartItemAmount, clearCart, countCartTotals } from '../features/cart/cartSlice';

const CartComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = useSelector((state) => state.cart.total_items);
  const totalAmount = useSelector((state) => state.cart.total_amount);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, color: product.color, amount: product.amount, product }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleToggleAmount = (id, value) => {
    dispatch(toggleCartItemAmount({ id, value }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCountCartTotals = () => {
    dispatch(countCartTotals());
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleCountCartTotals}>Update Totals</button>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.amount}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          <button onClick={() => handleToggleAmount(item.id, 'inc')}>Increase</button>
          <button onClick={() => handleToggleAmount(item.id, 'dec')}>Decrease</button>
        </div>
      ))}
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CartComponent;
