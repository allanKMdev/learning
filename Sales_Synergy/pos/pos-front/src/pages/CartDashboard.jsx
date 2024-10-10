// src/pages/CartDashboard.jsx
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartDashboard = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDashboard;
