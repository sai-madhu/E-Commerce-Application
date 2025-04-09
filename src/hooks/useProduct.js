import { useEffect, useState } from 'react';

function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("📦 Fetching products...");

    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log("✅ Products fetched successfully");
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });

   
  }, []);

  return { products, loading, error };
}

export default useProduct;
