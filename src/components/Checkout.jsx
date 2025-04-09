import React from 'react';

// This is the Checkout page shown after buying
function Checkout() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px', color: '#333' }}>
        Checkout
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Thank you for your purchase!
      </p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        Your order has been placed successfully.
      </p>
    </div>
  );
}

export default Checkout;
