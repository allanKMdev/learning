


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Inventory = () => {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');

//   // Fetch inventory items from the backend
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/inventory/');
//         setItems(response.data);
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     };
//     fetchItems();
//   }, []);

//   // Handle form submission to add a new item
//   const handleSubmit = async (e) => {
//     e.preventDefault();  // Prevent default form submission behavior
  
//     // Create the new item object
//     const newItem = {
//       name,
//       price: parseFloat(price),     // Convert price to float
//       quantity: parseInt(quantity), // Convert quantity to integer
//     };
  
//     console.log('Adding item:', newItem);  // Debugging log to check if item is correct
  
//     try {
//       // Send POST request to backend to add item
//       const response = await axios.post('http://127.0.0.1:8000/api/inventory/', newItem);
      
//       console.log('Response:', response.data);  // Debugging log to see backend response
  
//       // Update the items list in state with the new item
//       setItems([...items, response.data]);
  
//       // Clear the form inputs after successful submission
//       setName('');
//       setPrice('');
//       setQuantity('');
//     } catch (error) {
//       // Log any errors that occur during the request
//       console.error('Error adding item:', error);
//     }
//   };

//   // Handle item deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/inventory/${id}/`);
//       setItems(items.filter((item) => item.id !== id)); // Remove item from state
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div className="inventory-container p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-center">Inventory Management</h1>
      
//       {/* Form to add a new inventory item */}
//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="border rounded px-4 py-2"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//             className="border rounded px-4 py-2"
//           />
//           <input
//             type="number"
//             placeholder="Quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//             className="border rounded px-4 py-2"
//           />
//           <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
//             Add Item
//           </button>
//         </div>
//       </form>

//       {/* Table to display inventory items */}
//       <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-blue-600 text-white">
//             <th className="py-2 px-4 border-b">Item Name</th>
//             <th className="py-2 px-4 border-b">Price</th>
//             <th className="py-2 px-4 border-b">Quantity</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.length > 0 ? (
//             items.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b">{item.name}</td>
//                 <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
//                 <td className="py-2 px-4 border-b">{item.quantity}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="py-2 px-4 text-center">No items in inventory</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Inventory;


import { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryTab = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // Fetch inventory items from the backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/inventory/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  // Handle form submission to add a new item
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      price: parseFloat(price), // Convert price to float
      quantity: parseInt(quantity), // Convert quantity to integer
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/inventory/', newItem);
      setItems([...items, response.data]); // Update the items list in state with the new item
      setName(''); // Clear the form inputs after successful submission
      setPrice('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Handle item deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/inventory/${id}/`);
      setItems(items.filter((item) => item.id !== id)); // Remove item from state
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="inventory-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Inventory Management</h1>
      
      {/* Form to add a new inventory item */}
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

      {/* Table to display inventory items */}
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
                    className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-800"
                  >
                    Remove
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

export default InventoryTab;

