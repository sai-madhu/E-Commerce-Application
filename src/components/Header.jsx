import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.jpg'; 

// This is the header section at the top of the page
function Header() {
  const cart = useSelector((state) => state.cart);
  const itemCount = cart ? cart.length : 0;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
      padding: '15px 40px',
      width: '100%'
    }}>
      {/* Logo and website name */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            marginRight: '10px'
          }}
        />
        <Link to="/" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          ShoppyGlobe
        </Link>
      </div>

      {/* Search bar */}
      <div style={{ position: 'relative', width: '250px', margin: '0 30px' }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: '100%',
            padding: '6px 36px 6px 12px',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            fontSize: '16px'
          }}
        />
        <span style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#888'
        }}>
          🔍
        </span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          Cart ({itemCount})
        </Link>
      </div>
    </div>
  );
}

export default Header;
