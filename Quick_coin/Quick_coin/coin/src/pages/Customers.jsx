// import  { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const CustomerTransactions = ({ customerId }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Validate customerId before making the fetch call
//     if (!customerId) {
//       setError('Invalid customer ID.');
//       setLoading(false);
//       return;
//     }

//     const fetchTransactions = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(`/api/customers/${customerId}/transactions/`);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setTransactions(data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch transactions.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, [customerId]);

//   // Function to format currency using Intl.NumberFormat
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', { 
//       style: 'currency', 
//       currency: 'USD' 
//     }).format(amount);
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      
//       {loading ? (
//         <p>Loading transactions...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : transactions.length ? (
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th scope="col" className="py-3 px-6 text-left">Date</th>
//               <th scope="col" className="py-3 px-6 text-left">Total</th>
//               <th scope="col" className="py-3 px-6 text-left">Debt</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((txn) => (
//               <tr key={txn.id} className="border-b">
//                 <td className="py-3 px-6">{new Date(txn.date).toLocaleDateString()}</td>
//                 <td className="py-3 px-6">{formatCurrency(txn.total)}</td>
//                 <td className="py-3 px-6">{txn.debt ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No transactions found for this customer.</p>
//       )}
//     </div>
//   );
// };

// CustomerTransactions.propTypes = {
//   customerId: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
// };

// export default CustomerTransactions;


// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const CustomerTransactions = ({ customerId }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Validate customerId before making the fetch call
//     if (!customerId) {
//       setError('Invalid customer ID.');
//       setLoading(false);
//       return;
//     }

//     const fetchTransactions = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/customers/${customerId}/transactions/`);
        
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         setTransactions(data);
//       } catch (err) {
//         console.error('Fetch error:', err);
//         setError('Failed to fetch transactions. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, [customerId]);

//   // Function to format currency
//   const formatCurrency = (amount) => {
//     if (amount == null) return 'N/A';
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(amount);
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      
//       {loading ? (
//         <p>Loading transactions for customer ID: {customerId}...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : transactions.length ? (
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th scope="col" className="py-3 px-6 text-left">Date</th>
//               <th scope="col" className="py-3 px-6 text-left">Total</th>
//               <th scope="col" className="py-3 px-6 text-left">Debt</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((txn) => (
//               <tr key={txn.id} className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-6">{new Date(txn.date).toLocaleDateString()}</td>
//                 <td className="py-3 px-6">{formatCurrency(txn.total)}</td>
//                 <td className="py-3 px-6">{txn.debt ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No transactions found for this customer.</p>
//       )}
//     </div>
//   );
// };

// CustomerTransactions.propTypes = {
//   customerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default CustomerTransactions;


import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CustomerTransactions = ({ customerId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!customerId) {
      setError('Invalid customer ID.');
      setLoading(false);
      return;
    }

    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/customers/${customerId}/transactions/`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch transactions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [customerId]);

  const formatCurrency = (amount) => {
    if (amount == null) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>

      {loading ? (
        <p>Loading transactions for customer ID: {customerId}...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : transactions.length ? (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="py-3 px-6 text-left">Date</th>
              <th scope="col" className="py-3 px-6 text-left">Total</th>
              <th scope="col" className="py-3 px-6 text-left">Debt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{new Date(txn.date).toLocaleDateString()}</td>
                <td className="py-3 px-6">{formatCurrency(txn.total)}</td>
                <td className="py-3 px-6">{txn.debt ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found for this customer.</p>
      )}
    </div>
  );
};

CustomerTransactions.propTypes = {
  customerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CustomerTransactions;
