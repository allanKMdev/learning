import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    
    // State variables for data
    const [totalSales, setTotalSales] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalInventoryItems, setTotalInventoryItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the backend
    const fetchData = async () => {
        try {
            setLoading(true);
            const salesResponse = await axios.get('http://localhost:5000/api/sales/total');
            const customersResponse = await axios.get('http://localhost:5000/api/customers/count');
            const inventoryResponse = await axios.get('http://localhost:5000/api/inventory/count');

            setTotalSales(salesResponse.data.total); // Assuming response has { total: number }
            setTotalCustomers(customersResponse.data.count); // Assuming response has { count: number }
            setTotalInventoryItems(inventoryResponse.data.count); // Assuming response has { count: number }
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="home-container px-4 py-8 bg-gray-100 min-h-screen">
            {/* Welcome message */}
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Welcome to SYNERGY</h1>

            {/* Dashboard Section */}
            <div className="dashboard mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Dashboard</h2>
                <div className="dashboard-metrics grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (
                        <div className="text-center text-gray-600">Loading...</div>
                    ) : error ? (
                        <div className="text-red-500 text-center">{error}</div>
                    ) : (
                        <>
                            <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold text-gray-700">Total Sales</h3>
                                <p className="text-2xl text-blue-600 font-bold">${totalSales.toFixed(2)}</p>
                            </div>
                            <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold text-gray-700">Customers</h3>
                                <p className="text-2xl text-green-500 font-bold">{totalCustomers}</p>
                            </div>
                            <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold text-gray-700">Inventory Items</h3>
                                <p className="text-2xl text-purple-500 font-bold">{totalInventoryItems}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="recent-transactions">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
                <ul className="space-y-2">
                    {/* Sample Data - Replace with dynamic data */}
                    {["Order #1234 - $50.00 - 10/13/2024", "Order #1233 - $120.00 - 10/13/2024", "Order #1232 - $75.00 - 10/12/2024"].map((transaction, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                            {transaction}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
