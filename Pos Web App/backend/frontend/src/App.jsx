
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// // Import the Navbar
// import Home from './pages/Home';
// import Quicksale from './pages/Quicksale';
// import SaleHistory from './pages/SaleHistory';
// import Inventory from './pages/Inventory';
// import Customers from './pages/Customers';
// import About from './pages/About'; // Import About page

// const App = () => {
//     return (
//         <Router>
//                       {/* Header appears on all pages */}

//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/quicksale" element={<Quicksale />} />
//                 <Route path="/saleshistory" element={<SaleHistory />} />
//                 <Route path="/inventory" element={<Inventory />} />
//                 <Route path="/customers" element={<Customers />} />
//                 <Route path="/about" element={<About />} /> {/* Add About route */}
//             </Routes>
//             <Footer />
//         </Router>
//     );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quicksale from './pages/Quicksale';
import SaleHistory from './pages/SaleHistory';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Header from './components/Header';  // Importing the Header component
import Footer from './components/Footer';  // Importing the Footer component

// Main application component with routing setup, header, and footer
const App = () => {
    return (
        <Router>
            {/* Header component at the top */}
            <Header />
            
            {/* Main content area */}
            <main className="p-4 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quicksale" element={<Quicksale />} />
                    <Route path="/salehistory" element={<SaleHistory />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>

            {/* Footer component at the bottom */}
            <Footer />
        </Router>
    );
};

export default App;
