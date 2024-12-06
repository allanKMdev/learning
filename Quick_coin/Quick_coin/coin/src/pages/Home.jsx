
import  { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
    const [dailySalesData, setDailySalesData] = useState(null);
    const [weeklySalesData, setWeeklySalesData] = useState(null);
    const [monthlySalesData, setMonthlySalesData] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        // Mock API call
        const fetchSalesData = () => {
            // Replace with real API calls
            const daily = {
                labels: ["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
                datasets: [
                    {
                        label: "Sales ($)",
                        data: [100, 200, 150, 300, 250],
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        tension: 0.4,
                    },
                ],
            };

            const weekly = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        label: "Sales ($)",
                        data: [500, 700, 600, 800, 750, 900, 1000],
                        borderColor: "rgba(54, 162, 235, 1)",
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        tension: 0.4,
                    },
                ],
            };

            const monthly = {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                datasets: [
                    {
                        label: "Sales ($)",
                        data: [3000, 4000, 3500, 4500],
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        tension: 0.4,
                    },
                ],
            };

            // Set data into state
            setDailySalesData(daily);
            setWeeklySalesData(weekly);
            setMonthlySalesData(monthly);
        };

        fetchSalesData();
    }, []);

    return (
        <div className="home p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Daily Sales Graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 mb-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Daily Sales Graph</h2>
                <div className="h-48">
                    {dailySalesData ? <Line data={dailySalesData} /> : <span>Loading...</span>}
                </div>
            </div>

            {/* Weekly Sales Graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 mb-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Weekly Sales Graph</h2>
                <div className="h-48">
                    {weeklySalesData ? <Line data={weeklySalesData} /> : <span>Loading...</span>}
                </div>
            </div>

            {/* Monthly Sales Graph */}
            <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 text-center rounded-lg bg-gray-100">
                <h2 className="text-lg font-semibold mb-2">Monthly Sales Graph</h2>
                <div className="h-48">
                    {monthlySalesData ? <Line data={monthlySalesData} /> : <span>Loading...</span>}
                </div>
            </div>
        </div>
    );
};

export default Home;








// import { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import PropTypes from 'prop-types';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import axios from "axios";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // Backend base URL (stored in environment variables)
// const BASE_URL = "http://localhost:5000";

// const SalesChart = ({ title, data, loading }) => (
//     <div className="graph-placeholder border-2 border-dashed border-gray-300 p-6 mb-6 text-center rounded-lg bg-gray-100">
//       <h2 className="text-lg font-semibold mb-2">{title}</h2>
//       <div className="h-48">
//         {loading ? <span>Loading...</span> : <Line data={data} />}
//       </div>
//     </div>
//   );
  
//   SalesChart.propTypes = {
//     title: PropTypes.string.isRequired, // Ensure 'title' is a required string
//     data: PropTypes.object.isRequired, // Ensure 'data' is a required object
//     loading: PropTypes.bool, // 'loading' is optional and should be a boolean
//   };
  
//   SalesChart.defaultProps = {
//     loading: false, // Set default value for 'loading'
//   };


// const Home = () => {
//     const [dailySalesData, setDailySalesData] = useState(null);
//     const [weeklySalesData, setWeeklySalesData] = useState(null);
//     const [monthlySalesData, setMonthlySalesData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       // Fetch sales data from the backend
//       const fetchSalesData = async () => {
//         setLoading(true);
//         try {
//           const [dailyRes, weeklyRes, monthlyRes] = await Promise.all([
//             axios.get(`${BASE_URL}/api/sales/daily`),
//             axios.get(`${BASE_URL}/api/sales/weekly`),
//             axios.get(`${BASE_URL}/api/sales/monthly`),
//           ]);
  

// // Map API response data into Chart.js data format
// setDailySalesData(dailyRes.data);
// setWeeklySalesData(weeklyRes.data);
// setMonthlySalesData(monthlyRes.data);
// setError(null);
// } catch (err) {
// console.error("Failed to fetch sales data:", err);
// setError("Failed to fetch sales data. Please try again later.");
// } finally {
// setLoading(false);
// }
// };

// fetchSalesData();
// }, []);

// return (
//     <div className="home p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {/* Sales Graphs */}
//       <SalesChart title="Daily Sales Graph" data={dailySalesData} loading={loading} />
//       <SalesChart title="Weekly Sales Graph" data={weeklySalesData} loading={loading} />
//       <SalesChart title="Monthly Sales Graph" data={monthlySalesData} loading={loading} />
//     </div>
//   );
// };

// export default Home;

