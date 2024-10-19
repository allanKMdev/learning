

// import { Link } from 'react-router-dom';


// const Header = () => {
//     return (
//         <header className="bg-blue-600 text-white shadow">
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="text-2xl font-bold">
//                     <Link to="/" className="hover:opacity-80">POS System</Link>
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

// export default Header;




import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // Import PropTypes

const Header = ({ title }) => {
    return (
        <header className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Use title prop */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:opacity-80">{title}</Link>
                </div>
                
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
                    <Link to="/quicksale" className="hover:text-gray-200 transition duration-300">Quick Sale</Link>
                    <Link to="/salehistory" className="hover:text-gray-200 transition duration-300">Sales History</Link>
                    <Link to="/inventory" className="hover:text-gray-200 transition duration-300">Inventory</Link>
                    <Link to="/customers" className="hover:text-gray-200 transition duration-300">Customers</Link>
                    <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
                </nav>

                {/* Mobile Menu - Visible on smaller screens */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
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

// Prop validation for title
Header.propTypes = {
    title: PropTypes.string.isRequired,  // Validate that `title` is a required string
};

// Default prop value in case no title is passed
Header.defaultProps = {
    title: "POS System",  // Fallback title if no title is provided as a prop
};

export default Header;




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
//                     {/* Authentication Links */}
//                     <Link to="/login" className="hover:text-gray-200 transition duration-300">Login</Link>
//                     <Link to="/register" className="hover:text-gray-200 transition duration-300">Register</Link>
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
