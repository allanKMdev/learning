import React, { useState, useEffect } from 'react';
import { getCartItems, checkoutCart } from '../api/api';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch cart items when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        setCartItems(data);
        const total = data.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        setTotalPrice(total);
      } catch (err) {
        setError('Failed to load cart items');
        console.error('Error fetching cart items:', err);
      }
    };

    fetchCartItems();
  }, []);

  // Handle the checkout process
  const handleCheckout = async () => {
    try {
      await checkoutCart();
      setMessage('Checkout successful!');
      setCartItems([]); // Clear the cart after successful checkout
      setTotalPrice(0);  // Reset total price
    } catch (err) {
      setError('Checkout failed');
      console.error('Error during checkout:', err);
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Error message */}
      {message && <p className="text-green-500">{message}</p>} {/* Success message */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity} x ${item.product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Total Price */}
      <button 
        onClick={handleCheckout} 
        className="bg-blue-500 text-white rounded p-2 mt-2"
      >
        Confirm Checkout
      </button>
    </div>
  );
};

export default Checkout;
