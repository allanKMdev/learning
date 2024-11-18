

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const InventoryTab = () => {
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
//     e.preventDefault();

//     const newItem = {
//       name,
//       price: parseFloat(price), // Convert price to float
//       quantity: parseInt(quantity), // Convert quantity to integer
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/inventory/', newItem);
//       setItems([...items, response.data]); // Update the items list in state with the new item
//       setName(''); // Clear the form inputs after successful submission
//       setPrice('');
//       setQuantity('');
//     } catch (error) {
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
//                     className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-800"
//                   >
//                     Remove
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

// export default InventoryTab;

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const InventoryTab = () => {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [image, setImage] = useState(null); // State for the image file

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
//     e.preventDefault();

//     const newItem = {
//       name,
//       price: parseFloat(price), // Convert price to float
//       quantity: parseInt(quantity), // Convert quantity to integer
//     };

//     const formData = new FormData();
//     formData.append('name', newItem.name);
//     formData.append('price', newItem.price);
//     formData.append('quantity', newItem.quantity);
//     if (image) {
//       formData.append('image', image); // Append the image file to formData
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/inventory/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Specify the content type
//         },
//       });
//       setItems([...items, response.data]); // Update the items list in state with the new item
//       setName(''); // Clear the form inputs after successful submission
//       setPrice('');
//       setQuantity('');
//       setImage(null); // Clear the image state
//     } catch (error) {
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
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
//           <input
//             type="file"
//             accept="image/*" // Accept only image files
//             onChange={(e) => setImage(e.target.files[0])} // Set the selected file
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
//                     className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-800"
//                   >
//                     Remove
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

// export default InventoryTab;


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const InventoryTab = () => {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [image, setImage] = useState(null); // State for the image file

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
//     e.preventDefault();

//     const newItem = {
//       name,
//       price: parseFloat(price), // Convert price to float
//       quantity: parseInt(quantity), // Convert quantity to integer
//     };

//     const formData = new FormData();
//     formData.append('name', newItem.name);
//     formData.append('price', newItem.price);
//     formData.append('quantity', newItem.quantity);
//     if (image) {
//       formData.append('image', image); // Append the image file to formData
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/inventory/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Specify the content type
//         },
//       });
//       setItems([...items, response.data]); // Update the items list in state with the new item
//       setName(''); // Clear the form inputs after successful submission
//       setPrice('');
//       setQuantity('');
//       setImage(null); // Clear the image state
//     } catch (error) {
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
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
//           <input
//             type="file"
//             accept="image/*" // Accept only image files
//             onChange={(e) => setImage(e.target.files[0])} // Set the selected file
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
//             <th className="py-2 px-4 border-b">Image</th> {/* New Column for Image */}
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
//                   {item.image && ( // Check if image exists
//                     <img 
//                       src={`http://127.0.0.1:8000${item.image}`} // Construct the image URL
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded" // Style the image
//                     />
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-800"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="py-2 px-4 text-center">No items in inventory</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InventoryTab;

import { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryTab = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/inventory/');
      setItems(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch inventory items. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', parseFloat(price)); // Convert price to float
    formData.append('quantity', parseInt(quantity, 10)); // Convert quantity to integer
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/inventory/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setItems([...items, response.data]);
      // Clearing inputs
      setName('');
      setPrice('');
      setQuantity('');
      setImage(null);
      setError(null);
    } catch (error) {
      console.error('Error adding item:', error);
      setError('Failed to add an item. Please check your input and try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/inventory/${id}/`);
      setItems(items.filter((item) => item.id !== id));
      setError(null);
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Failed to delete the item. Please try again.');
    }
  };
  return (
    <div className="inventory-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Inventory Management</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>} {/* Display error messages */}

      {/* Form to add a new inventory item */}
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
          <button type="submit" className={`bg-blue-600 text-white rounded px-4 py-2 ${!name || !price || !quantity ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!name || !price || !quantity}>
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
              <td colSpan="5" className="py-2 px-4 text-center">No items in inventory</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTab;