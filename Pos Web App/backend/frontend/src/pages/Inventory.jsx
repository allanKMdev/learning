import  { useState } from 'react';

const Inventory = () => {
    const [items, setItems] = useState([]); // State to hold inventory items
    const [name, setName] = useState(''); // State for item name
    const [price, setPrice] = useState(''); // State for item price
    const [quantity, setQuantity] = useState(''); // State for item quantity

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(), // Unique ID for each item
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        setItems([...items, newItem]); // Add new item to the list
        setName('');
        setPrice('');
        setQuantity('');
    };

    // Function to handle item deletion
    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="inventory-container p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">Inventory Management</h1>

            {/* Inventory Form */}
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
                        Add Item
                    </button>
                </div>
            </form>

            {/* Inventory Table */}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="py-2 px-4 border-b">Item Name</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b">{item.quantity}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-2 px-4 text-center">No items in inventory</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
