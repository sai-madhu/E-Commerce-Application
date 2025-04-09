import React from 'react';

// This is the footer shown at the bottom of the page
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '40px'
    }}>
      {/* Left side text */}
      <div style={{ fontSize: '14px' }}>
        © {currentYear} ShoppyGlobe. All rights reserved.
      </div>

      {/* Right side links */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
        <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</a>
        <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      </div>
    </div>
  );
}

export default Footer;
