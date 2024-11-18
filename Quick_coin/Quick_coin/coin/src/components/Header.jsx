// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';  // Import PropTypes

// const Header = ({ title }) => {
//     return (
//         <header className="bg-blue-600 text-white shadow">
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo - Use title prop */}
//                 <div className="text-2xl font-bold">
//                     <Link to="/" className="hover:opacity-80">{title}</Link>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <nav className="hidden md:flex space-x-6">
//                     <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
//                     <Link to="/quicksale" className="hover:text-gray-200 transition duration-300">Quick Sale</Link>
//                     <Link to="/salehistory" className="hover:text-gray-200 transition duration-300">Sales History</Link>
//                     <Link to="/inventory" className="hover:text-gray-200 transition duration-300">Inventory</Link>
//                     <Link to="/customers" className="hover:text-gray-200 transition duration-300">Customers</Link>
//                     <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
//                 </nav>

//                 {/* Mobile Menu - Visible on smaller screens */}
//                 <div className="md:hidden">
//                     <button className="text-white focus:outline-none">
//                         {/* Hamburger Icon */}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// // Prop validation for title
// Header.propTypes = {
//     title: PropTypes.string.isRequired,  // Validate that `title` is a required string
// };

// // Default prop value in case no title is passed
// Header.defaultProps = {
//     title: "POS System",  // Fallback title if no title is provided as a prop
// };

// export default Header;










// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';



// const Header = ({ title, isAuthenticated, onLogout }) => {
//     return (
//         <header className="bg-blue-600 text-white shadow">
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo - Use title prop */}
//                 <div className="text-2xl font-bold">
//                     <Link to="/" className="hover:opacity-80">{title}</Link>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <nav className="hidden md:flex space-x-6">
//                     <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
//                     <Link to="/quicksale" className="hover:text-gray-200 transition duration-300">Quick Sale</Link>
//                     <Link to="/salehistory" className="hover:text-gray-200 transition duration-300">Sales History</Link>
//                     <Link to="/inventory" className="hover:text-gray-200 transition duration-300">Inventory</Link>
//                     <Link to="/customers" className="hover:text-gray-200 transition duration-300">Customers</Link>
//                     <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
//                 </nav>

//                 {/* Authentication Buttons */}
//                 <div className="flex items-center space-x-4">
//                     {isAuthenticated ? (
//                         <>
//                             <button
//                                 onClick={onLogout}
//                                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <Link
//                                 to="/login"
//                                 className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
//                             >
//                                 Login
//                             </Link>
//                             <Link
//                                 to="/register"
//                                 className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//                             >
//                                 Register
//                             </Link>
//                         </>
//                     )}
//                 </div>

//                 {/* Mobile Menu - Visible on smaller screens */}
//                 <div className="md:hidden">
//                     <button className="text-white focus:outline-none">
//                         {/* Hamburger Icon */}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// // Prop validation for title and authentication state
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
//     isAuthenticated: PropTypes.bool,           // Add isAuthenticated prop to control login/logout display
//     onLogout: PropTypes.func,                  // onLogout prop for logout functionality
// };

// // Default prop values
// Header.defaultProps = {
//     title: "POS System",
//     isAuthenticated: false,                    // Default to not logged in
//     onLogout: () => {},                        // Default logout function as placeholder
// };

// export default Header;












// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// // import AuthContext from "../context/AuthContext";

// const Header = ({ title }) => {
//   const { user, logoutUser } = useContext(AuthContext);

//   return (
//     <header className="bg-blue-600 text-white shadow">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="hover:opacity-80">{title}</Link>
//         </div>

//         {/* Navigation Links - visible on larger screens */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
//           <Link to="/quicksale" className="hover:text-gray-200 transition duration-300">Quick Sale</Link>
//           <Link to="/salehistory" className="hover:text-gray-200 transition duration-300">Sales History</Link>
//           <Link to="/inventory" className="hover:text-gray-200 transition duration-300">Inventory</Link>
//           <Link to="/customers" className="hover:text-gray-200 transition duration-300">Customers</Link>
//           <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
//         </nav>

//         {/* Authentication Buttons */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <>
//               <button
//                 onClick={logoutUser}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu - Visible on smaller screens */}
//         <div className="md:hidden">
//           <button className="text-white focus:outline-none">
//             {/* Hamburger Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Prop validation
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   title: "POS System",
// };

// export default Header;


import  { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ title, isAuthenticated, onLogout }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Use title prop */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:opacity-80">{title}</Link>
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
                    <Link to="/quicksale" className="hover:text-gray-200 transition duration-300">Quick Sale</Link>
                    <Link to="/salehistory" className="hover:text-gray-200 transition duration-300">Sales History</Link>
                    <Link to="/inventory" className="hover:text-gray-200 transition duration-300">Inventory</Link>
                    <Link to="/customers" className="hover:text-gray-200 transition duration-300">Customers</Link>
                    <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
                </nav>

                {/* Authentication Buttons */}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <button
                            onClick={onLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/Login"
                                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/Register"
                                className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu - Visible on smaller screens */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

// Prop validation for title and authentication state
Header.propTypes = {
    title: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool,
    onLogout: PropTypes.func,
};

// Default prop values
Header.defaultProps = {
    title: "POS System",
    isAuthenticated: false,
    onLogout: () => {},
};

export default Header;