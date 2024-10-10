import  { useEffect, useState } from 'react';
import { getCartItems, checkoutCart } from '../api/api'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await getCartItems();
      setCartItems(data);
    };
    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    await checkoutCart();
    // Handle successful checkout
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="mt-4">
        {cartItems.map(item => (
          <div key={item.id} className="border p-2 rounded mb-2">
            <p>{item.product.name} - Quantity: {item.quantity}</p>
          </div>
        ))}
        <button onClick={handleCheckout} className="bg-blue-500 text-white p-2 rounded mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
