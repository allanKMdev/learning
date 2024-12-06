

// import { useState } from 'react';
// import axios from 'axios';

// const Quicksale = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default payment method

//  const products = [
//     { id: 1, name: 'Pishori Rice', price: 200, stock: 10, image: '/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//     { id: 2, name: 'Basmati Rice', price: 180, stock: 3, image: '/images/basmati_rice.jpeg', options: [{ weight: '250g', price: 45 }, { weight: '500g', price: 90 }, { weight: '1kg', price: 180 }] },
//     { id: 3, name: 'Biriyani Rice', price: 200, image: '/images/biriyani_rice.jpeg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//     { id: 4, name: 'Maize Flour', price: 150, image: '/images/maize_flour.jpeg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 150 }] },
//     { id: 5, name: 'Wheat Flour', price: 120, image: '/images/wheat_flour.jpeg', options: [{ weight: '250g', price: 30 }, { weight: '500g', price: 60 }, { weight: '1kg', price: 120 }] },
//     { id: 6, name: 'Sugar', price: 160, image: '/images/sugar.jpeg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 160 }] },
//     { id: 7, name: 'Salt', price: 20, image: '/images/salt.jpeg', options: [{ weight: '250g', price: 5 }, { weight: '500g', price: 10 }, { weight: '1kg', price: 20 }] },
//     { id: 8, name: 'Cooking Oil', price: 240, image: '/images/cooking_oil.jpeg', options: [{ weight: '250ml', price: 60 }, { weight: '500ml', price: 120 }, { weight: '1L', price: 240 }] },
//     { id: 9, name: 'Indomie', price: 50, image: '/images/indomie.jpeg', options: [{ weight: '75g', price: 50 }] },
//     { id: 10, name: 'Spaghetti', price: 100, image: '/images/spaghetti.jpeg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }] },
//     { id: 11, name: 'Canned Beans', price: 100, image: '/images/canned_beans.jpeg', options: [{ weight: '400g', price: 100 }] },
//     { id: 12, name: 'Tomato Sauce', price: 150, image: '/images/tomato_sauce.jpeg', options: [{ weight: '500g', price: 150 }] },
//     { id: 13, name: 'Tea', price: 40, image: '/images/tea.jpeg', options: [{ weight: '100g', price: 40 }] },
//     { id: 14, name: 'Coffee', price: 80, image: '/images/coffee.jpeg', options: [{ weight: '100g', price: 80 }] },
//     { id: 15, name: 'Biscuits', price: 60, image: '/images/biscuits.jpeg', options: [{ weight: '200g', price: 60 }] },
//     { id: 16, name: 'Laundry Soap', price: 50, image: '/images/laundry_soap.jpeg', options: [{ weight: '500g', price: 50 }] },
//     { id: 17, name: 'Dish Soap', price: 70, image: '/images/dish_soap.jpeg', options: [{ weight: '500ml', price: 70 }] },
//     { id: 18, name: 'Fresh Milk', price: 120, image: '/images/fresh_milk.jpeg', options: [{ weight: '1L', price: 120 }] },
//     { id: 19, name: 'Yogurt', price: 90, image: '/images/yogurt.jpeg', options: [{ weight: '500g', price: 90 }] },
//     { id: 20, name: 'Eggs', price: 180, image: '/images/eggs.jpeg', options: [{ weight: 'dozen', price: 180 }] },
//     { id: 21, name: 'Blue Band Margarine', price: 130, image: '/images/blue_band.jpeg', options: [{ weight: '250g', price: 65 }, { weight: '500g', price: 130 }] },
//     { id: 22, name: 'Bread', price: 50, image: '/images/bread.jpeg', options: [{ weight: '400g', price: 50 }] },
//     { id: 23, name: 'Soda', price: 60, image: '/images/soda.jpeg', options: [{ weight: '500ml', price: 60 }, { weight: '1L', price: 100 }] },
//     { id: 24, name: 'Mandazi', price: 10, image: '/images/mandazi.jpeg', options: [{ weight: '1pc', price: 10 }] },
//     { id: 25, name: 'Cabbage', price: 80, image: '/images/cabbage.jpeg', options: [{ weight: '1kg', price: 80 }] },
//     { id: 26, name: 'Tomatoes', price: 20, image: '/images/tomatoes.jpeg', options: [{ weight: '1pc', price: 20 }] },
//     { id: 27, name: 'Onions', price: 15, image: '/images/onions.jpeg', options: [{ weight: '1pc', price: 15 }] },
//     { id: 28, name: 'Charcoal', price: 50, image: '/images/charcoal.jpeg', options: [{ weight: '2kg', price: 50 }] },
//     { id: 29, name: 'Matchbox', price: 5, image: '/images/matchbox.jpeg', options: [{ weight: '1pc', price: 5 }] },
//   ];

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const adjustQuantity = (productId, selectedOption, quantityChange) => {
//     const product = products.find(p => p.id === productId);
//     const newCart = [...cart];
//     const existingItem = newCart.find(item => item.id === productId && item.weight === selectedOption.weight);

//     if (existingItem) {
//       existingItem.quantity += quantityChange;
//       if (existingItem.quantity <= 0) {
//         newCart.splice(newCart.indexOf(existingItem), 1);
//       }
//     } else if (quantityChange > 0) {
//       newCart.push({ ...product, weight: selectedOption.weight, quantity: 1, price: selectedOption.price });
//     }

//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const removeFromCart = (itemToRemove) => {
//     const newCart = cart.filter(item => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight);
//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const checkout = async () => {
//     if (cart.length === 0) {
//       setError("Your cart is empty!");
//       return;
//     }

//     try {
//       const saleData = {
//         items: cart,
//         total: totalCost,
//         payment_method: paymentMethod, // Add the payment method to the sale data
//       };

//       const response = await axios.post('http://127.0.0.1:8000/api/sales/', saleData);

//       if (response.status === 201) {
//         setCart([]);
//         setTotalCost(0);
//         setError(null);
//         alert("Checkout successful! Thank you for your purchase.");
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || "Failed to save sale. Please try again.";
//       setError(errorMsg);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
//         placeholder="Search for a product..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product List */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
//               <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
//                 <p className="text-gray-600 mb-2">Starting from: <span className="text-green-600 font-bold">Ksh {product.price}</span></p>
//                 {product.stock <= 5 && (
//                   <p className="text-xs text-red-600 font-bold mb-2">Low Stock!</p>
//                 )}
//                 <select
//                   onChange={(e) => adjustQuantity(product.id, product.options[e.target.selectedIndex - 1], 1)}
//                   className="border border-gray-300 p-2 rounded w-full mb-4">
                
//                   <option value="">Select Weight</option>
//                   {product.options.map((option) => (
//                     <option key={option.weight} value={option.weight}>
//                       {option.weight} - Ksh {option.price}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => adjustQuantity(product.id, product.options[0], -1)}
//                     className="px-3 py-1 bg-gray-300 text-gray-800 rounded"
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={() => adjustQuantity(product.id, product.options[0], 1)}
//                     className="px-3 py-1 bg-gray-800 text-white rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="w-full md:w-1/4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//           {error && <p className="text-red-600">{error}</p>}
//           <ul className="space-y-2">
//             {cart.map((item, index) => (
//               <li key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                 <span>{item.name} ({item.weight}) x {item.quantity}</span>
//                 <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
//                 <button
//                   className="text-red-500 ml-4"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   &times;
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-green-600">Ksh {totalCost}</span></h3>
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700 font-semibold mb-2">Payment Method:</label>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border border-gray-300 p-2 rounded w-full"
//             >
//               <option value="Cash">Cash</option>
//               <option value="Debt">Debt</option>
//             </select>
//           </div>
//           <button
//             className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
//             onClick={checkout}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quicksale;














// import { useState } from 'react';
// import axios from 'axios';

// const Quicksale = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default payment method
//   const [selectedCustomer, setSelectedCustomer] = useState(''); // Selected customer for debt
//   const [customers, setCustomers] = useState([
//     { id: 1, name: 'John Doe', debt: 1000 },
//     { id: 2, name: 'Jane Smith', debt: 0 },
//     { id: 3, name: 'Bob Johnson', debt: 200 },
//   ]); // Mock customer data

//   const products = [
//     { id: 1, name: 'Pishori Rice', price: 200, stock: 10, image: '/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//   ];

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const adjustQuantity = (productId, selectedOption, quantityChange) => {
//     const product = products.find((p) => p.id === productId);
//     const newCart = [...cart];
//     const existingItem = newCart.find(
//       (item) => item.id === productId && item.weight === selectedOption.weight
//     );

//     if (existingItem) {
//       existingItem.quantity += quantityChange;
//       if (existingItem.quantity <= 0) {
//         newCart.splice(newCart.indexOf(existingItem), 1);
//       }
//     } else if (quantityChange > 0) {
//       newCart.push({
//         ...product,
//         weight: selectedOption.weight,
//         quantity: 1,
//         price: selectedOption.price,
//       });
//     }

//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const removeFromCart = (itemToRemove) => {
//     const newCart = cart.filter(
//       (item) => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight
//     );
//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const checkout = async () => {
//     if (cart.length === 0) {
//       setError('Your cart is empty!');
//       return;
//     }

//     if (paymentMethod === 'Debt' && !selectedCustomer) {
//       setError('Please select a customer for the debt transaction.');
//       return;
//     }

//     try {
//       const saleData = {
//         items: cart,
//         total: totalCost,
//         payment_method: paymentMethod,
//         customer: paymentMethod === 'Debt' ? selectedCustomer : null,
//       };

//       const response = await axios.post('http://127.0.0.1:8000/api/sales/', saleData);

//       if (response.status === 201) {
//         setCart([]);
//         setTotalCost(0);
//         setError(null);
//         alert('Checkout successful! Thank you for your purchase.');

//         // Update customer debt if payment method is Debt
//         if (paymentMethod === 'Debt') {
//           setCustomers((prev) =>
//             prev.map((customer) =>
//               customer.name === selectedCustomer
//                 ? { ...customer, debt: customer.debt + totalCost }
//                 : customer
//             )
//           );
//         }
//       }
//     } catch (err) {
//       const errorMsg =
//         err.response?.data?.message || 'Failed to save sale. Please try again.';
//       setError(errorMsg);
//     }
//   };

//   const customersWithDebt = customers.filter((customer) => customer.debt > 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
//         placeholder="Search for a product..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product List */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={product.image}
//                 alt={product.name}
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-gray-600 mb-2">
//                   Starting from:{' '}
//                   <span className="text-green-600 font-bold">Ksh {product.price}</span>
//                 </p>
//                 <select
//                   onChange={(e) =>
//                     adjustQuantity(product.id, product.options[e.target.selectedIndex - 1], 1)
//                   }
//                   className="border border-gray-300 p-2 rounded w-full mb-4"
//                 >
//                   <option value="">Select Weight</option>
//                   {product.options.map((option) => (
//                     <option key={option.weight} value={option.weight}>
//                       {option.weight} - Ksh {option.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="w-full md:w-1/4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//           {error && <p className="text-red-600">{error}</p>}
//           <ul className="space-y-2">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="bg-gray-100 p-3 rounded flex justify-between items-center"
//               >
//                 <span>
//                   {item.name} ({item.weight}) x {item.quantity}
//                 </span>
//                 <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
//                 <button
//                   className="text-red-500 ml-4"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   &times;
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold text-gray-800">
//               Total: <span className="text-green-600">Ksh {totalCost}</span>
//             </h3>
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700 font-semibold mb-2">Payment Method:</label>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border border-gray-300 p-2 rounded w-full"
//             >
//               <option value="Cash">Cash</option>
//               <option value="Debt">Debt</option>
//             </select>
//           </div>
//           {paymentMethod === 'Debt' && (
//             <div className="mt-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Select Customer:
//               </label>
//               <select
//                 value={selectedCustomer}
//                 onChange={(e) => setSelectedCustomer(e.target.value)}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 <option value="">Select a Customer</option>
//                 {customers.map((customer) => (
//                   <option key={customer.id} value={customer.name}>
//                     {customer.name} (Debt: Ksh {customer.debt})
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <button
//             className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
//             onClick={checkout}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quicksale;


























// import { useState } from 'react';
// import axios from 'axios';

// const Quicksale = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const [error, setError] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('Cash');
//   const [selectedCustomer, setSelectedCustomer] = useState('');
//   const [customers, setCustomers] = useState([
//     { id: 1, name: 'John Doe', debt: 1000 },
//     { id: 2, name: 'Jane Smith', debt: 0 },
//     { id: 3, name: 'Bob Johnson', debt: 200 },
//   ]);

//   const products = [
//     { 
//       id: 1, 
//       name: 'Pishori Rice', 
//       price: 200, 
//       stock: 10, 
//       image: '/images/pishori_rice.jpg', 
//       options: [
//         { weight: '250g', price: 50 },
//         { weight: '500g', price: 100 },
//         { weight: '1kg', price: 200 }
//       ] 
//     },
//   ];

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const adjustQuantity = (productId, selectedOption, quantityChange) => {
//     const product = products.find((p) => p.id === productId);
    
//     // Check if the requested quantity change is valid
//     if (quantityChange > 0 && product.stock <= 0) {
//         alert("Out of stock");
//         return;
//     }

//     // Check if enough stock is available for adding quantity
//     if (quantityChange > 0 && product.stock < quantityChange) {
//         alert(`Not enough stock! Only ${product.stock} left.`);
//         return;
//     }

//     const newCart = [...cart];
//     const existingItem = newCart.find(
//       (item) => item.id === productId && item.weight === selectedOption.weight
//     );

//     if (existingItem) {
//         existingItem.quantity += quantityChange;
//         if (existingItem.quantity <= 0) {
//             newCart.splice(newCart.indexOf(existingItem), 1);
//         }
//     } else if (quantityChange > 0) {
//         newCart.push({
//             ...product,
//             weight: selectedOption.weight,
//             quantity: 1,
//             price: selectedOption.price,
//         });
//     }

//     // Update the stock based on quantity change
//     product.stock -= quantityChange;

//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const removeFromCart = (itemToRemove) => {
//     const newCart = cart.filter(
//       (item) => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight
//     );
//     setCart(newCart);
//     setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//   };

//   const checkout = async () => {
//     if (cart.length === 0) {
//       setError('Your cart is empty!');
//       return;
//     }

//     if (paymentMethod === 'Debt' && !selectedCustomer) {
//       setError('Please select a customer for the debt transaction.');
//       return;
//     }

//     try {
//       const saleData = {
//         items: cart,
//         total: totalCost,
//         payment_method: paymentMethod,
//         customer: paymentMethod === 'Debt' ? selectedCustomer : null,
//       };

//       const response = await axios.post('http://127.0.0.1:8000/api/sales/', saleData);

//       if (response.status === 201) {
//         setCart([]);
//         setTotalCost(0);
//         setError(null);
//         alert('Checkout successful! Thank you for your purchase.');

//         // Update customer debt if the payment method is Debt
//         if (paymentMethod === 'Debt') {
//           setCustomers((prev) =>
//             prev.map((customer) =>
//               customer.name === selectedCustomer
//                 ? { ...customer, debt: customer.debt + totalCost }
//                 : customer
//             )
//           );
//         }
//       }
//     } catch (err) {
//       const errorMsg =
//         err.response?.data?.message || 'Failed to save sale. Please try again.';
//       setError(errorMsg);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
//         placeholder="Search for a product..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product List */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={product.image}
//                 alt={product.name}
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-gray-600 mb-2">
//                   Starting from:{' '}
//                   <span className="text-green-600 font-bold">Ksh {product.price}</span>
//                 </p>
//                 <select
//                   onChange={(e) =>
//                     adjustQuantity(product.id, product.options[e.target.selectedIndex - 1], 1)
//                   }
//                   className="border border-gray-300 p-2 rounded w-full mb-4"
//                 >
//                   <option value="">Select Weight</option>
//                   {product.options.map((option) => (
//                     <option key={option.weight} value={option.weight}>
//                       {option.weight} - Ksh {option.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="w-full md:w-1/4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//           {error && <p className="text-red-600">{error}</p>}
//           <ul className="space-y-2">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="bg-gray-100 p-3 rounded flex justify-between items-center"
//               >
//                 <span>
//                   {item.name} ({item.weight}) x {item.quantity}
//                 </span>
//                 <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
//                 <button
//                   className="text-red-500 ml-4"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   &times;
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold text-gray-800">
//               Total: <span className="text-green-600">Ksh {totalCost}</span>
//             </h3>
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700 font-semibold mb-2">Payment Method:</label>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border border-gray-300 p-2 rounded w-full"
//             >
//               <option value="Cash">Cash</option>
//               <option value="Debt">Debt</option>
//             </select>
//           </div>
//           {paymentMethod === 'Debt' && (
//             <div className="mt-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Select Customer:
//               </label>
//               <select
//                 value={selectedCustomer}
//                 onChange={(e) => setSelectedCustomer(e.target.value)}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 <option value="">Select a Customer</option>
//                 {customers.map((customer) => (
//                   <option key={customer.id} value={customer.name}>
//                     {customer.name} (Debt: Ksh {customer.debt})
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <button
//             className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
//             onClick={checkout}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quicksale;










































import { useState, useEffect } from 'react';
import axios from 'axios';

const Quicksale = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customers, setCustomers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/customers/');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchProducts();
    fetchCustomers();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const adjustQuantity = (productId, selectedOption, quantityChange) => {
    const product = products.find((p) => p.id === productId);

    if (quantityChange > 0 && product.stock < quantityChange) {
      alert(`Not enough stock! Only ${product.stock} left.`);
      return;
    }

    const newCart = [...cart];
    const existingItem = newCart.find(
      (item) => item.id === productId && item.weight === selectedOption.weight
    );

    if (existingItem) {
      existingItem.quantity += quantityChange;
      if (existingItem.quantity <= 0) {
        newCart.splice(newCart.indexOf(existingItem), 1);
      }
    } else if (quantityChange > 0) {
      newCart.push({
        ...product,
        weight: selectedOption.weight,
        quantity: 1,
        price: selectedOption.price,
      });
    }

    product.stock -= quantityChange;

    setCart(newCart);
    setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const removeFromCart = (itemToRemove) => {
    const newCart = cart.filter(
      (item) => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight
    );
    setCart(newCart);
    setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const checkout = async () => {
    if (cart.length === 0) {
      setError('Your cart is empty!');
      return;
    }

    if (paymentMethod === 'Debt' && !selectedCustomer) {
      setError('Please select a customer for the debt transaction.');
      return;
    }

    setLoading(true);

    try {
      const saleData = {
        items: cart,
        total: totalCost,
        payment_method: paymentMethod,
        customer: paymentMethod === 'Debt' ? selectedCustomer : null,
      };

      const response = await axios.post('http://127.0.0.1:8000/api/sales/', saleData);

      if (response.status === 201) {
        setCart([]);
        setTotalCost(0);
        setError(null);
        alert('Checkout successful! Thank you for your purchase.');

        if (paymentMethod === 'Debt') {
          setCustomers((prev) =>
            prev.map((customer) =>
              customer.name === selectedCustomer
                ? { ...customer, debt: customer.debt + totalCost }
                : customer
            )
          );
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save sale. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quick Sale</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <input
        type="text"
        className="border p-2 mb-6 rounded w-full max-w-lg"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col md:flex-row gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>Starting from: Ksh {product.price}</p>
                <select
                  onChange={(e) =>
                    adjustQuantity(product.id, product.options[e.target.selectedIndex - 1], 1)
                  }
                  className="border p-2 rounded w-full mt-4"
                >
                  <option value="">Select Weight</option>
                  {product.options.map((option) => (
                    <option key={option.weight} value={option.weight}>
                      {option.weight} - Ksh {option.price}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          {error && <p className="text-red-600">{error}</p>}
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span>
                  {item.name} ({item.weight}) x {item.quantity}
                </span>
                <span>Ksh {item.price * item.quantity}</span>
                <button onClick={() => removeFromCart(item)} className="text-red-500">
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-green-600">Ksh {totalCost}</span>
            </h3>
          </div>
          <div className="mt-4">
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="Cash">Cash</option>
              <option value="Debt">Debt</option>
            </select>
          </div>
          {paymentMethod === 'Debt' && (
            <button
              onClick={() => setShowCustomerModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Select Customer
            </button>
          )}
          <button
            onClick={checkout}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Checkout
          </button>
        </div>
      </div>

      {showCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded shadow w-3/4 max-w-lg">
            <h2 className="text-2xl mb-4">Select a Customer</h2>
            <ul>
              {customers.map((customer) => (
                <li
                  key={customer.id}
                  className="p-2 border-b cursor-pointer"
                  onClick={() => {
                    setSelectedCustomer(customer.name);
                    setShowCustomerModal(false);
                  }}
                >
                  {customer.name} (Debt: Ksh {customer.debt})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quicksale;






