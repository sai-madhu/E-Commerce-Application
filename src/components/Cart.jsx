import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  // Getting the items added to cart from the redux store
  const cartItems = useSelector((state) => state.cart.items);

  // This is used to send actions to redux store
  const dispatch = useDispatch();

  // This function calculates total price of all items in cart
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = total + cartItems[i].price;
    }
    return total.toFixed(2); 
  };

  return (
    <div style={{ padding: '40px', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ fontSize: '26px', marginBottom: '20px' }}>🛒 Your Shopping Cart</h2>

      {/* If no items in cart, show message */}
      {cartItems.length === 0 ? (
        <p style={{ fontSize: '18px' }}>Cart is empty.</p>
      ) : (
        <div>
          {/* Showing each item in the cart */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '16px',
                marginBottom: '12px',
                borderRadius: '10px',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '100px', height: '80px', objectFit: 'contain', marginRight: '20px' }}
                />
                <div>
                  <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>Price: ₹{item.price}</p>
                  <p style={{ margin: 0 }}>Rating: ⭐ {item.rating}</p>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))}

         
          <div
            style={{
              textAlign: 'right',
              marginTop: '30px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Total: ₹ {calculateTotal()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
