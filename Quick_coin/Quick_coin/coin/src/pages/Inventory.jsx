import  { useState } from 'react';
import PropTypes from 'prop-types';

const InventoryTab = ({ items, onAddItem, onDeleteItem, error }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, price, quantity, image });
    setName('');
    setPrice('');
    setQuantity('');
    setImage(null);
  };

  return (
    <div className="inventory-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Inventory Management</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border rounded px-4 py-2"
          />
          <button
            type="submit"
            className={`bg-blue-600 text-white rounded px-4 py-2 ${!name || !price || !quantity ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!name || !price || !quantity}
          >
            Add Item
          </button>
        </div>
      </form>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 border-b">Item Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">${parseFloat(item.price).toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">
                  {item.image && (
                    <img
                      src={`http://127.0.0.1:8000${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-800"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-2 px-4 text-center">No items in inventory</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

InventoryTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  error: PropTypes.string,
};

InventoryTab.defaultProps = {
  items: [],
  error: null,
};

export default InventoryTab;
