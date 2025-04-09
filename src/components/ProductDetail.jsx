import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetail() {
  // Get product ID from URL
  const { id } = useParams();

  // State to store product, loading and quantity
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Initialize Redux dispatcher
  const dispatch = useDispatch();

  // Fetch product data from API using product ID
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Add to cart function
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert("Item added to cart!");
  };

  // Buy now button handler
  const handleBuyNow = () => {
    alert("Redirecting to payment gateway...");
  };

  // Show loading screen
  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem'
      }}>
        🔄 Loading product details...
      </div>
    );
  }

  // If no product found
  if (!product) {
    return <div style={{ padding: 20 }}>Product not found</div>;
  }

  // Main product details UI
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
      padding: '30px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'flex-start',
        width: '100%'
      }}>
        {/* Product Image */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img
            src={product.thumbnail}
            alt={`Product - ${product.title}`}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Product Info */}
        <div style={{ flex: 1.5, minWidth: '300px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.title}</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>{product.description}</p>
          <p style={{ fontSize: '2rem', color: 'green', fontWeight: 'bold' }}>₹ {product.price}</p>

          <ul style={{
            listStyleType: 'none',
            padding: 0,
            marginTop: '20px',
            lineHeight: '2'
          }}>
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Discount:</strong> {product.discountPercentage}%</li>
            <li><strong>Rating:</strong> {product.rating} ⭐</li>
            <li><strong>Stock:</strong> {product.stock}</li>
          </ul>

          {/* Quantity and Buttons */}
          <div style={{
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '15px'
          }}>
            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{
                  marginLeft: '10px',
                  padding: '6px',
                  width: '60px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              />
            </label>

            <button
              onClick={handleAddToCart}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
