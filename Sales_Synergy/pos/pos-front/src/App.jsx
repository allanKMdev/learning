// // import React from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Customer from './pages/Customer';
// // import Inventory from './pages/Inventory';
// // import Quicksales from './pages/Quicksales';
// // import Sales from './pages/Sales';
// // import Profile from './pages/Profile';
// // import Checkout from './pages/Checkout';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/customer" element={<Customer />} />
// //         <Route path="/inventory" element={<Inventory />} />
// //         <Route path="/quicksales" element={<Quicksales />} />
// //         <Route path="/sales" element={<Sales />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/checkout" element={<Checkout />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// // import Customer from './pages/Customer';
// // import Inventory from './pages/Inventory';
// // import Quicksales from './pages/Quicksales';
// // import Sales from './pages/Sales';
// // import Profile from './pages/Profile';
// // import Checkout from './pages/Checkout';
// import Register from './pages/Register';
// import Login from './pages/Login';
// // import ProductList from './components/ProductList';
// // import Cart from './components/Cart';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/customers" element={<Customer />} />
//           <Route path="/inventory" element={<Inventory />} />
//           <Route path="/quick-sales" element={<Quicksales />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/checkout" element={<Checkout />} /> */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/products" element={<ProductList />} />
//           <Route path="/cart" element={<Cart />} /> */}
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.jsx

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Navbar';
// import Home from './pages/Home';
// import Sales from './pages/Sales';
// import QuickSale from './pages/QuickSale';
// import Inventory from './pages/Inventory';
// import Customers from './pages/Customers';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import CartDashboard from './pages/CartDashboard';
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <div>
//             <NavBar />
//             <Routes>
//               <Route path="/home" element={<Home />} />
//               <Route path="/sales" element={<Sales />} />
//               <Route path="/quick-sale" element={<QuickSale />} />
//               <Route path="/inventory" element={<Inventory />} />
//               <Route path="/customers" element={<Customers />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/cart" element={<CartDashboard />} />
//             </Routes>
//           </div>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;

// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'; // Import NavBar
import Home from './pages/Home';
import Sales from './pages/Sales';
import QuickSale from './pages/QuickSale';
import Inventory from './pages/Inventory';
import Customers from './pages/Customers';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Navbar is rendered on all pages */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/quick-sale" element={<QuickSale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

