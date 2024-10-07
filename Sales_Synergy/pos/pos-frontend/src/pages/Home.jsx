import React, { useState, useEffect } from 'react';
import axios from '../axios';  // Import Axios instance

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Dashboard Overview</h1>
      <h2 className="text-2xl mb-4">Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 p-4 bg-white rounded-lg shadow-md">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
