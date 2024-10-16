
// import Dashboard from '../components/Dashboard';

// const Home = () => {
//     return (
//         <div>
//             <h1>Welcome to the POS System</h1>
//             {/* <Dashboard /> */}
//         </div>
//     );
// };

// export default Home;





import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container px-4 py-8 bg-gray-50 min-h-screen">
            {/* Welcome message */}
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Welcome to the POS System</h1>

            {/* Dashboard Section */}
            <div className="dashboard mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Dashboard</h2>
                <div className="dashboard-metrics grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-700">Total Sales</h3>
                        <p className="text-2xl text-blue-600 font-bold">$10,000</p>
                    </div>
                    <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-700">Customers</h3>
                        <p className="text-2xl text-green-500 font-bold">150</p>
                    </div>
                    <div className="metric-card bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-700">Inventory Items</h3>
                        <p className="text-2xl text-purple-500 font-bold">250</p>
                    </div>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="quick-links mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
                <div className="quick-link-buttons flex space-x-4">
                    <button onClick={() => navigate('/quick-sale')} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Quick Sale</button>
                    <button onClick={() => navigate('/inventory')} className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">Manage Inventory</button>
                    <button onClick={() => navigate('/customers')} className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">Manage Customers</button>
                    <button onClick={() => navigate('/reports')} className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700">View Reports</button>
                </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="recent-transactions">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
                <ul className="space-y-2">
                    <li className="bg-white p-4 rounded-lg shadow">Order #1234 - $50.00 - 10/13/2024</li>
                    <li className="bg-white p-4 rounded-lg shadow">Order #1233 - $120.00 - 10/13/2024</li>
                    <li className="bg-white p-4 rounded-lg shadow">Order #1232 - $75.00 - 10/12/2024</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
