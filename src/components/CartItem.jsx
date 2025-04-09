import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

// This component shows one product item in the cart
function CartItem({ product }) {
  // This lets us send actions to redux store
  const dispatch = useDispatch();

  // This function removes the item from cart
  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-item" style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h4>{product.title}</h4>
      <p>Price: ₹{product.price}</p>
      <button 
        onClick={handleRemove}
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          cursor: 'pointer'
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
