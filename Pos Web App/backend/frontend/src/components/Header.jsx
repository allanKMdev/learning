
// // import { Link } from 'react-router-dom';

// // const Header = () => {
// //     return (
// //         <header className="bg-gray-800 p-4 text-white">
// //             <nav>
// //                 <ul className="flex space-x-4">
// //                     <li><Link to="/">Home</Link></li>
// //                     <li><Link to="/quicksale">Quick Sale</Link></li>
// //                     <li><Link to="/saleshistory">Sales History</Link></li>
// //                     <li><Link to="/inventory">Inventory</Link></li>
// //                     <li><Link to="/customers">Customers</Link></li>
// //                     <li><Link to="/about">About</Link></li> {/* Add About link */}
// //                 </ul>
// //             </nav>
// //         </header>
// //     );
// // };

// // export default Header;


// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <header className="bg-indigo-600 text-white">
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="text-2xl font-bold">
//                     <Link to="/" className="hover:text-rose-300">POS System</Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="hidden md:flex space-x-6">
//                     <Link to="/" className="hover:text-rose-300 transition duration-300">Home</Link>
//                     <Link to="/quicksale" className="hover:text-emerald-300 transition duration-300">Quick Sale</Link>
//                     <Link to="/salehistory" className="hover:text-amber-300 transition duration-300">Sales History</Link>
//                     <Link to="/inventory" className="hover:text-teal-300 transition duration-300">Inventory</Link>
//                     <Link to="/customers" className="hover:text-lime-300 transition duration-300">Customers</Link>
//                     <Link to="/about" className="hover:text-pink-300 transition duration-300">About</Link>
//                 </nav>

//                 {/* Mobile Menu */}
//                 <div className="md:hidden">
//                     <button className="text-white hover:text-gray-400 focus:outline-none transition duration-300">
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

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:opacity-80">POS System</Link>
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

export default Header;
