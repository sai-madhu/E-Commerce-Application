import React from 'react';

const Products = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff4e6',
        color: '#222',
        minHeight: '100vh',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Our Products
      </h2>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '15px',
        }}
      >
        Explore a wide range of electronics, fashion, home essentials, and more.
      </p>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '15px',
        }}
      >
        Top-rated and trending items available now!
      </p>
    </div>
  );
};

export default Products;
