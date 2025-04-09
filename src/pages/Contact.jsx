import React from 'react';
import Footer from '../components/Footer'; 

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFB6C1',
        color: 'white',
        minHeight: '100vh',
        padding: '40px'
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Contact Us</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px' }}>📧 Email: support@shoppyglobe.com</p>
      <p style={{ fontSize: '16px', marginBottom: '10px' }}>📞 Phone: +91-9876543210</p>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>📍 Address: 123, Main Street, Your City, India</p>

      <Footer />
    </div>
  );
};

export default Contact;
