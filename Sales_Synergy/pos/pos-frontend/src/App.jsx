import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import QuickSale from './pages/QuickSale';
import Inventory from './pages/Inventory';
import Customers from './pages/Customers';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/quick-sale" element={<QuickSale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
