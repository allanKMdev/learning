import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/quicksales">Quick Sales</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
