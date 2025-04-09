import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="home-container">
      <style>{`
        .home-container {
          width: 100vw; /* Full width viewport */
          padding: 40px;
          box-sizing: border-box;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 40px;
          font-weight: bold;
          color: #1c2b36;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
      `}</style>

      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
