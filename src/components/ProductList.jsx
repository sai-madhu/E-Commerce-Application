import React, { useState } from 'react';
import useProduct from '../hooks/useProduct';
import ProductItem from '../components/ProductItem';

function ProductList() {
  const { products, loading, error } = useProduct();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        All Products
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '16px',
          marginBottom: '24px',
        }}
      />

      {/* Loading or Error States */}
      {loading && <p style={{ textAlign: 'center' }}>🔄 Loading products...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
