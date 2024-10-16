

const Dashboard = () => {
    const salesData = {
        totalSales: 10000,
        totalCustomers: 200,
        itemsSold: 500,
    };

    return (
        <div className="dashboard bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Business Overview</h2>
            <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="metric bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
                    <p className="text-2xl text-blue-600 font-bold">${salesData.totalSales}</p>
                </div>
                <div className="metric bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Total Customers</h3>
                    <p className="text-2xl text-green-500 font-bold">{salesData.totalCustomers}</p>
                </div>
                <div className="metric bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Items Sold</h3>
                    <p className="text-2xl text-purple-500 font-bold">{salesData.itemsSold}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
