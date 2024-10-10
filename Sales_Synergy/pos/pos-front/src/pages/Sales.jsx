// src/pages/Sales.jsx
import  { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductList from '../components/ProductList';

const Sales = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product A', description: 'Description for Product A' },
    { id: 2, name: 'Product B', description: 'Description for Product B' },
    { id: 3, name: 'Product C', description: 'Description for Product C' },
    { id: 4, name: 'Product D', description: 'Description for Product D' },
    // Add more products here
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Sales</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Sales;
