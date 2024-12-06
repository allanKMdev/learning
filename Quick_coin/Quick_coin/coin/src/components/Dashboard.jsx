
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [sales, setSales] = useState([]);
//   const [totalSales, setTotalSales] = useState(0);
//   const [mostPurchased, setMostPurchased] = useState('');
//   const [totalCustomers, setTotalCustomers] = useState(0);
//   const [itemsSold, setItemsSold] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem('access_token');
//         const response = await axios.get('http://localhost:8000/api/salehistory/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setSales(response.data);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching sales data:", err);
//         setError("Failed to load sales data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSalesData();
//   }, []);

//   useEffect(() => {
//     if (sales.length > 0) {
//       const total = sales.reduce((acc, sale) => acc + Number(sale.total.replace(/[^0-9.-]+/g, "")), 0);
//       setTotalSales(total);

//       const productCount = {};
//       let itemsCount = 0;

//       sales.forEach((sale) => {
//         sale.items.split(',').forEach((item) => {
//           const trimmedItem = item.trim();
//           productCount[trimmedItem] = (productCount[trimmedItem] || 0) + 1;
//           itemsCount++;
//         });
//       });

//       const mostPurchasedProduct = Object.keys(productCount).reduce((a, b) =>
//         productCount[a] > productCount[b] ? a : b
//       );

//       setMostPurchased(mostPurchasedProduct);
//       setItemsSold(itemsCount);
//       setTotalCustomers(sales.length);
//     }
//   }, [sales]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
//       <div className="dashboard bg-gray-50 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-gray-700 mb-4">Business Overview</h2>
//         <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="metric bg-white p-6 rounded-lg shadow text-center">
//             <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
//             <p className="text-2xl text-blue-600 font-bold">${totalSales.toFixed(2)}</p>
//           </div>
//           <div className="metric bg-white p-6 rounded-lg shadow text-center">
//             <h3 className="text-lg font-semibold text-gray-700">Total Customers</h3>
//             <p className="text-2xl text-green-500 font-bold">{totalCustomers}</p>
//           </div>
//           <div className="metric bg-white p-6 rounded-lg shadow text-center">
//             <h3 className="text-lg font-semibold text-gray-700">Items Sold</h3>
//             <p className="text-2xl text-purple-500 font-bold">{itemsSold}</p>
//           </div>
//         </div>
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold text-gray-700">Most Purchased Product</h3>
//           <p className="text-xl text-indigo-600 font-bold">{mostPurchased}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from 'react';
import axios from 'axios';
import SaleHistory from './SaleHistory';
import CustomerTransactions from './CustomerTransactions';

const Dashboard = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  // Function to handle selecting a customer from SaleHistory
  const handleSelectCustomer = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Display Sales History or Customer Transactions */}
      {selectedCustomerId ? (
        <CustomerTransactions customerId={selectedCustomerId} />
      ) : (
        <SaleHistory onSelectCustomer={handleSelectCustomer} />
      )}
    </div>
  );
};

export default Dashboard;
