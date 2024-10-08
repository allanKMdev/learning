import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Customer from './pages/Customer';
import Inventory from './pages/Inventory';
import Quicksales from './pages/Quicksales';
import Sales from './pages/Sales';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/quicksales" element={<Quicksales />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
