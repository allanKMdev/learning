import  { useState } from 'react';

const Customers = () => {
  // Initial customer data
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  ]);

  // State for the form inputs
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });
  const [editingCustomer, setEditingCustomer] = useState(null); // Track which customer is being edited

  // Handle input changes for both adding and editing customers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  // Add a new customer
  const addCustomer = (e) => {
    e.preventDefault();
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
      setNewCustomer({ name: '', email: '', phone: '' }); // Reset form
    }
  };

  // Remove a customer
  const removeCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Start editing customer details
  const startEditing = (customer) => {
    setEditingCustomer(customer);
    setNewCustomer(customer);
  };

  // Save edited customer
  const saveEditedCustomer = (e) => {
    e.preventDefault();
    setCustomers(
      customers.map((customer) =>
        customer.id === editingCustomer.id ? { ...editingCustomer, ...newCustomer } : customer
      )
    );
    setEditingCustomer(null);
    setNewCustomer({ name: '', email: '', phone: '' }); // Reset form
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customers Management</h1>

      {/* Customer Form */}
      <form onSubmit={editingCustomer ? saveEditedCustomer : addCustomer} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Customer Email"
            value={newCustomer.email}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Customer Phone"
            value={newCustomer.phone}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {editingCustomer ? 'Save Changes' : 'Add Customer'}
        </button>
        {editingCustomer && (
          <button
            type="button"
            onClick={() => {
              setEditingCustomer(null);
              setNewCustomer({ name: '', email: '', phone: '' });
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Customers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="py-3 px-6">{customer.name}</td>
                  <td className="py-3 px-6">{customer.email}</td>
                  <td className="py-3 px-6">{customer.phone}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => startEditing(customer)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeCustomer(customer.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
