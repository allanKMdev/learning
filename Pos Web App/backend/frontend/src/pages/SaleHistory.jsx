


import  { useState } from 'react';

const SaleHistory = ({ onSalesUpdate }) => {
  const [sales, setSales] = useState([
    { id: 1, date: '2023-10-12', items: 'Item 1, Item 2', total: 100, paymentMethod: 'Credit Card' },
    { id: 2, date: '2023-10-11', items: 'Item 3', total: 50, paymentMethod: 'Cash' },
    { id: 3, date: '2023-10-10', items: 'Item 4, Item 5', total: 75, paymentMethod: 'PayPal' },
  ]);

  // State for the new sale form
  const [newSale, setNewSale] = useState({
    date: '',
    items: '',
    total: '',
    paymentMethod: '',
  });

  // State for the search filter
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSale((prevSale) => ({ ...prevSale, [name]: value }));
  };

  const handleAddSale = () => {
    const updatedSales = [...sales, { ...newSale, id: sales.length + 1, total: parseFloat(newSale.total) }];
    setSales(updatedSales);
    onSalesUpdate(updatedSales); // Send updated sales to the Dashboard component
  };

  // Filter sales based on search term
  const filteredSales = sales.filter(
    (sale) =>
      sale.items.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.date.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Sale History</h1>

      {/* New Sale Form */}
      <div className="mb-6">
        <h2 className="text-xl mb-4">Add New Sale</h2>
        <input
          type="date"
          name="date"
          value={newSale.date}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg mb-2"
        />
        <input
          type="text"
          name="items"
          placeholder="Items (comma-separated)"
          value={newSale.items}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg mb-2 ml-4"
        />
        <input
          type="number"
          name="total"
          placeholder="Total"
          value={newSale.total}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg mb-2 ml-4"
        />
        <input
          type="text"
          name="paymentMethod"
          placeholder="Payment Method"
          value={newSale.paymentMethod}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg mb-2 ml-4"
        />
        <button
          onClick={handleAddSale}
          className="bg-blue-500 text-white p-2 rounded-lg ml-4"
        >
          Add Sale
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by item or date..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
        />
      </div>

      {/* Sales Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-left">Total</th>
              <th className="py-3 px-6 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="py-3 px-6">{sale.date}</td>
                  <td className="py-3 px-6">{sale.items}</td>
                  <td className="py-3 px-6">${sale.total}</td>
                  <td className="py-3 px-6">{sale.paymentMethod}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center">
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
