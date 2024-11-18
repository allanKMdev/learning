

const Home = () => {
    return (
        <div className="home p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            
            {/* Placeholder for a daily sales graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 mb-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Daily Sales Graph</h2>
                <div className="placeholder h-48 flex items-center justify-center text-gray-500">
                    {/* Placeholder for a daily sales graph */}
                    <span>Daily Sales Graph Placeholder</span>
                </div>
            </div>

            {/* Placeholder for a weekly sales graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 mb-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Weekly Sales Graph</h2>
                <div className="placeholder h-48 flex items-center justify-center text-gray-500">
                    {/* Placeholder for a weekly sales graph */}
                    <span>Weekly Sales Graph Placeholder</span>
                </div>
            </div>

            {/* Placeholder for a monthly sales graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Monthly Sales Graph</h2>
                <div className="placeholder h-48 flex items-center justify-center text-gray-500">
                    {/* Placeholder for a monthly sales graph */}
                    <span>Monthly Sales Graph Placeholder</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
