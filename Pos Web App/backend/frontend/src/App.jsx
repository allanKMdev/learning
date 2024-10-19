
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quicksale from './pages/Quicksale';
import SaleHistory from './pages/SaleHistory';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Customers from './pages/Customers'; 
import Header from './components/Header';  
import Footer from './components/Footer';  

const App = () => {
    return (
        <Router>
            
            <Header />
            
            {}
            <main className="p-4 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quicksale" element={<Quicksale />} />
                    <Route path="/salehistory" element={<SaleHistory />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/about" element={<About />} />
                    {}
                    <Route path="/customers" element={<Customers />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
