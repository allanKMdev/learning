// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4 text-white">
//       <ul className="flex space-x-4">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/customers">Customers</Link></li>
//         <li><Link to="/inventory">Inventory</Link></li>
//         <li><Link to="/quicksales">Quick Sales</Link></li>
//         <li><Link to="/sales">Sales</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/checkout">Checkout</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* App Title */}
//         <div className="text-white text-2xl font-bold">POS App</div>

//         {/* Hamburger Menu Icon for mobile */}
//         <div className="block lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Links for larger screens */}
//         <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-6`}>
//           <Link
//             to="/"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             to="/customers"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Customers
//           </Link>
//           <Link
//             to="/inventory"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Inventory
//           </Link>
//           <Link
//             to="/quick-sale"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Quick Sale
//           </Link>
//           <Link
//             to="/sales"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Sales
//           </Link>
//           <Link
//             to="/profile"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Profile
//           </Link>
//           <Link
//             to="/checkout"
//             className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//           >
//             Checkout
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden mt-2">
//           <div className="flex flex-col space-y-2">
//             <Link
//               to="/"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               About
//             </Link>
//             <Link
//               to="/customers"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Customers
//             </Link>
//             <Link
//               to="/inventory"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Inventory
//             </Link>
//             <Link
//               to="/quick-sale"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Quick Sale
//             </Link>
//             <Link
//               to="/sales"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Sales
//             </Link>
//             <Link
//               to="/profile"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Profile
//             </Link>
//             <Link
//               to="/checkout"
//               onClick={toggleMenu}
//               className="text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 p-2 rounded transition duration-300 ease-in-out"
//             >
//               Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// src/components/NavBar.jsx

// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex flex-col md:flex-row md:space-x-4">
//         <li><Link to="/home" className="text-white hover:text-blue-400">Home</Link></li>
//         <li><Link to="/sales" className="text-white hover:text-blue-400">Sales</Link></li>
//         <li><Link to="/quick-sale" className="text-white hover:text-blue-400">Quick Sale</Link></li>
//         <li><Link to="/inventory" className="text-white hover:text-blue-400">Inventory</Link></li>
//         <li><Link to="/customers" className="text-white hover:text-blue-400">Customers</Link></li>
//         <li><Link to="/about" className="text-white hover:text-blue-400">About</Link></li>
//         <li><Link to="/login" className="text-white hover:text-blue-400">Login</Link></li>
//         <li><Link to="/register" className="text-white hover:text-blue-400">Register</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// src/components/NavBar.jsx
// src/components/NavBar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/home" className="text-white text-lg font-semibold hover:text-blue-400">
              My POS App
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/home" className="text-white hover:text-blue-400">Home</Link>
                </li>
                <li>
                  <Link to="/sales" className="text-white hover:text-blue-400">Sales</Link>
                </li>
                <li>
                  <Link to="/quick-sale" className="text-white hover:text-blue-400">Quick Sale</Link>
                </li>
                <li>
                  <Link to="/inventory" className="text-white hover:text-blue-400">Inventory</Link>
                </li>
                <li>
                  <Link to="/customers" className="text-white hover:text-blue-400">Customers</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-blue-400">About</Link>
                </li>
                <li>
                  <Link to="/login" className="text-white hover:text-blue-400">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:text-blue-400">Register</Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-blue-400 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/home" className="block text-white hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/sales" className="block text-white hover:text-blue-400">Sales</Link>
            </li>
            <li>
              <Link to="/quick-sale" className="block text-white hover:text-blue-400">Quick Sale</Link>
            </li>
            <li>
              <Link to="/inventory" className="block text-white hover:text-blue-400">Inventory</Link>
            </li>
            <li>
              <Link to="/customers" className="block text-white hover:text-blue-400">Customers</Link>
            </li>
            <li>
              <Link to="/about" className="block text-white hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/login" className="block text-white hover:text-blue-400">Login</Link>
            </li>
            <li>
              <Link to="/register" className="block text-white hover:text-blue-400">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
