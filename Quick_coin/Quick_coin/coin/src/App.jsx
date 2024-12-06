import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
// import PrivateRoute from "./utils/Privateroute"
// import { AuthProvider } from './context/AuthContext'





import Home from './pages/Home';
import Quicksale from './pages/Quicksale';
import SaleHistory from './pages/SaleHistory';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Customers from './pages/Customers';
// import Login from './pages/Login';
import NotFound from './components/NotFound';
// import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

const App = () => {
    return (
        <Router>
            <Header />
            <main className="p-4 min-h-screen">
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/quicksale" element={<Quicksale />} />
                    <Route path="/salehistory" element={<SaleHistory />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/register" element={<Register />} /> */}
                    <Route path="/customers" element={<Customers />} />

                    {/* Protected routes */}
                    <Route
                        path="/protected"
                        element={
                            <ProtectedRoute>
                                <Customers />
                            </ProtectedRoute>
                        }
                    />

                    {/* Logout Route */}
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;


// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// import NotFound from './components/NotFound';
// import Quicksale from './pages/Quicksale';
// import SaleHistory from './pages/SaleHistory';
// import Inventory from './pages/Inventory';
// import About from './pages/About';
// import Customers from './pages/Customers';
// // import ProtectedRoute from './componenets/ProtectedRoute'; // Ensure this component is defined for handling protected routes

// // Logout function component
// function Logout() {
//   localStorage.clear();
//   return <Navigate to="/login" />;
// }

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main className="p-4 min-h-screen">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/quicksale" element={<Quicksale />} />
//           <Route path="/salehistory" element={<SaleHistory />} />
//           <Route path="/inventory" element={<Inventory />} />
//           <Route path="/customers" element={<Customers />} />
//           <Route path="*" element={<NotFound />} />

//           {/* Protected Routes */}
//           <Route
//             path="/protected"
//             element={
//               <ProtectedRoute>
//                 <Customers />
//               </ProtectedRoute>
//             }
//           />

//           {/* Logout Route */}
//           <Route path="/logout" element={<Logout />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;



