import { useEffect, useState } from 'react';
import { getSalesSummary, getPopularProducts, getLowStockAlerts } from '../api/api';

const Dashboard = () => {
    const [salesSummary, setSalesSummary] = useState(null);
    const [popularProducts, setPopularProducts] = useState([]);
    const [lowStockAlerts, setLowStockAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all data simultaneously
                const [salesSummaryData, popularProductsData, lowStockAlertsData] = await Promise.all([
                    getSalesSummary(),
                    getPopularProducts(),
                    getLowStockAlerts()
                ]);

                setSalesSummary(salesSummaryData);
                setPopularProducts(popularProductsData);
                setLowStockAlerts(lowStockAlertsData);
                setLoading(false);
            } catch (err) {
                setError('Failed to load data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Sales Summary Section */}
            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
                {salesSummary ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-700">Total Sales: ${salesSummary.totalSales}</p>
                            <p className="text-gray-700">Total Transactions: {salesSummary.transactions}</p>
                        </div>
                        <div>
                            <p className="text-gray-700">Total Revenue: ${salesSummary.totalRevenue}</p>
                        </div>
                    </div>
                ) : (
                    <p>No sales data available.</p>
                )}
            </div>

            {/* Popular Products Section */}
            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
                {popularProducts.length > 0 ? (
                    <ul>
                        {popularProducts.map(product => (
                            <li key={product.id} className="p-2 border-b last:border-none">
                                {product.name} - Sold: {product.salesCount}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No popular products available.</p>
                )}
            </div>

            {/* Low Stock Alerts Section */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Low Stock Alerts</h2>
                {lowStockAlerts.length > 0 ? (
                    <ul>
                        {lowStockAlerts.map(product => (
                            <li key={product.id} className="p-2 border-b last:border-none">
                                {product.name} - Stock: {product.stock} remaining
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No low stock alerts.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
