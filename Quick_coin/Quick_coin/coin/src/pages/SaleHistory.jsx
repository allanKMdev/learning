
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const SaleHistory = () => {
//   const [sales, setSales] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch sales data from the backend
//     const fetchSales = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem('access_token'); // Retrieve JWT token
//         const response = await axios.get('http://localhost:8000/api/salehistory/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setSales(response.data);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching sales data:", err);
//         setError("Failed to load sales data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSales();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter sales based on search term
//   const filteredSales = sales.filter(
//     (sale) =>
//       sale.items.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       sale.date.includes(searchTerm) ||
//       sale.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Sale History</h1>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by item, date, or payment method..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
//         />
//       </div>

//       {/* Sales Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-3 px-6 text-left">Date</th>
//               <th className="py-3 px-6 text-left">Items</th>
//               <th className="py-3 px-6 text-left">Total</th>
//               <th className="py-3 px-6 text-left">Payment Method</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredSales.length > 0 ? (
//               filteredSales.map((sale) => (
//                 <tr key={sale.id} className="border-b">
//                   <td className="py-3 px-6">{sale.date}</td>
//                   <td className="py-3 px-6">{sale.items}</td>
//                   <td className="py-3 px-6">Ksh {sale.total}</td>
//                   <td className="py-3 px-6">{sale.paymentMethod}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="py-4 px-6 text-center">
//                   No sales found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SaleHistory;





import { useState, useEffect } from 'react';
import axios from 'axios';

const SaleHistory = ({ onSelectCustomer }) => {
  const [sales, setSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8000/api/salehistory/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSales(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching sales data:", err);
        setError("Failed to load sales data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSales = sales.filter(
    (sale) =>
      sale.items.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.date.includes(searchTerm) ||
      sale.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Sale History</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by item, date, or payment method..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-left">Total</th>
              <th className="py-3 px-6 text-left">Payment Method</th>
              <th className="py-3 px-6 text-left">Customer</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="py-3 px-6">{sale.date}</td>
                  <td className="py-3 px-6">{sale.items}</td>
                  <td className="py-3 px-6">Ksh {sale.total}</td>
                  <td className="py-3 px-6">{sale.paymentMethod}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => onSelectCustomer(sale.customerId)}
                      className="text-blue-500"
                    >
                      View Transactions
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center">
                  No sales found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SaleHistory;














