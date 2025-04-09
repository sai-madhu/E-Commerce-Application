import React from 'react';

function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '80px'
    }}>
      <h2 style={{
        fontSize: '40px',
        fontWeight: 'bold'
      }}>
        404
      </h2>
      <p style={{
        fontSize: '20px',
        marginTop: '10px'
      }}>
        Page Not Found
      </p>
    </div>
  );
}

export default NotFound;
