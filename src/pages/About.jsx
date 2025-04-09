import React from 'react';

const About = () => {
  return (
    <div style={{
      flex: 1,
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      color: '#333',
      padding: '40px'
    }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>About Us</h2>

      <p style={{ fontSize: '16px', marginBottom: '16px' }}>
        Welcome to <strong>ShoppyGlobe</strong> – your one-stop destination for discovering amazing products online.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '16px' }}>
        At ShoppyGlobe, we're passionate about helping you find everything you need in one place. From tech gadgets to home decor, fashion to fitness, we’ve got you covered.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '16px' }}>
        Our team works hard to curate a collection of high-quality and affordable products. We believe online shopping should be easy, fun, and secure – and we’re here to make that happen.
      </p>

      <div style={{ fontSize: '16px', marginBottom: '16px' }}>
        <p>What makes us special? We focus on:</p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>✔️ Fast and safe delivery</li>
          <li>✔️ Trusted brands and sellers</li>
          <li>✔️ 24/7 customer support</li>
          <li>✔️ Simple and secure checkout</li>
        </ul>
      </div>

      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Thank you for being a part of our journey. Whether you're shopping for yourself or someone else, we’re here to serve you with the best experience possible.
      </p>
    </div>
  );
};

export default About;
