import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  // Inline styles
  const styles = {
    container: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      backgroundColor: "#fff",
      textAlign: "center",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "contain",
      borderRadius: "8px",
    },
    title: {
      fontSize: "1rem",
      fontWeight: "bold",
      margin: "12px 0 8px",
    },
    price: {
      fontSize: "1rem",
      color: "green",
      fontWeight: "600",
      marginBottom: "10px",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "10px",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };

  // JSX rendering
  return (
    <div style={styles.container}>
      {/* Link to product detail page */}
      <Link to={`/products/${product.id}`} style={styles.link}>
        <img src={product.thumbnail} alt={product.title} style={styles.image} />
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>₹ {product.price}</p>
      </Link>

      {/* Add to Cart button */}
      <button style={styles.button} onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
