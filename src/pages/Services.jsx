import React from 'react';

const Services = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          fontSize: '28px',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
      >
        Our Services
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '16px' }}>
        At <strong>ShoppyGlobe</strong>, we offer a wide range of services designed to give you the best shopping experience.
      </p>

      <ul
        style={{
          fontSize: '16px',
          marginLeft: '20px',
          marginBottom: '20px',
          paddingLeft: '0',
        }}
      >
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>🚚 Fast Delivery:</strong> We deliver your orders quickly and safely to your doorstep.
        </li>
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>📞 24/7 Customer Support:</strong> Our team is always ready to help with any questions or issues.
        </li>
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>✅ Quality Assurance:</strong> Every product is checked for quality before it reaches you.
        </li>
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>🔒 Secure Payments:</strong> We use trusted and secure payment gateways to protect your information.
        </li>
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>🔄 Easy Returns:</strong> Not happy with your order? No problem! We offer hassle-free returns and exchanges.
        </li>
        <li
          style={{
            marginBottom: '15px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong>🛍️ Wide Product Range:</strong> From electronics to clothing, explore a huge variety of products.
        </li>
      </ul>

      <p style={{ fontSize: '16px' }}>
        Our goal is to make online shopping simple, safe, and satisfying. We are always working to improve and add new features so that your experience with us is the best it can be.
      </p>

      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Thank you for choosing ShoppyGlobe. We’re here to serve you!
      </p>
    </div>
  );
};

export default Services;
