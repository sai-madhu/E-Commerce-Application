import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1f1f1f',
      padding: '16px 32px',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
    }}>
      
      {/* Website Logo */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: '#00bcd4', textDecoration: 'none' }}>
          ShoppyGlobe
        </Link>
      </h2>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
