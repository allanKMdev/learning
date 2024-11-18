

// import { useState } from 'react';

// const Quicksale = () => {
//     const products = [
//         { id: 1, name: 'Pishori Rice', price: 200, image: '/static/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//         { id: 2, name: 'Basmati Rice', price: 180, image: '/static/images/basmati_rice.jpg', options: [{ weight: '250g', price: 45 }, { weight: '500g', price: 90 }, { weight: '1kg', price: 180 }] },
//                 { id: 3, name: 'Biriyani Rice', price: 200, image: '/static/images/biriyani_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//                 { id: 4, name: 'Maize Flour', price: 150, image: '/static/images/maize_flour.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 150 }] },
//                 { id: 5, name: 'Wheat Flour', price: 120, image: '/static/images/wheat_flour.jpg', options: [{ weight: '250g', price: 30 }, { weight: '500g', price: 60 }, { weight: '1kg', price: 120 }] },
//                 { id: 6, name: 'Sugar', price: 160, image: '/static/images/sugar.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 160 }] },
//                 { id: 7, name: 'Salt', price: 20, image: '/static/images/salt.jpg', options: [{ weight: '250g', price: 5 }, { weight: '500g', price: 10 }, { weight: '1kg', price: 20 }] },
//                 { id: 8, name: 'Cooking Oil', price: 240, image: '/static/images/cooking_oil.jpg', options: [{ weight: '250ml', price: 60 }, { weight: '500ml', price: 120 }, { weight: '1L', price: 240 }] },
//                 { id: 9, name: 'Indomie', price: 50, image: '/static/images/indomie.jpg', options: [{ weight: '75g', price: 50 }] },
//                 { id: 10, name: 'Spaghetti', price: 100, image: '/static/images/spaghetti.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }] },
//                 { id: 11, name: 'Canned Beans', price: 100, image: '/static/images/canned_beans.jpg', options: [{ weight: '400g', price: 100 }] },
//                 { id: 12, name: 'Tomato Sauce', price: 150, image: '/static/images/tomato_sauce.jpg', options: [{ weight: '500g', price: 150 }] },
//                 { id: 13, name: 'Tea', price: 40, image: '/static/images/tea.jpg', options: [{ weight: '100g', price: 40 }] },
//                 { id: 14, name: 'Coffee', price: 80, image: '/static/images/coffee.jpg', options: [{ weight: '100g', price: 80 }] },
//                 { id: 15, name: 'Biscuits', price: 60, image: '/static/images/biscuits.jpg', options: [{ weight: '200g', price: 60 }] },
//                 { id: 16, name: 'Laundry Soap', price: 50, image: '/static/images/laundry_soap.jpg', options: [{ weight: '500g', price: 50 }] },
//                 { id: 17, name: 'Dish Soap', price: 70, image: '/static/images/dish_soap.jpg', options: [{ weight: '500ml', price: 70 }] },
//                 { id: 18, name: 'Fresh Milk', price: 120, image: '/static/images/fresh_milk.jpg', options: [{ weight: '1L', price: 120 }] },
//                 { id: 19, name: 'Yogurt', price: 90, image: '/static/images/yogurt.jpg', options: [{ weight: '500g', price: 90 }] },
//                 { id: 20, name: 'Eggs', price: 180, image: '/static/images/eggs.jpg', options: [{ weight: 'dozen', price: 180 }] },
//                 { id: 21, name: 'Blue Band Margarine', price: 130, image: '/static/images/blue_band.jpg', options: [{ weight: '250g', price: 65 }, { weight: '500g', price: 130 }] },
//                 { id: 22, name: 'Bread', price: 50, image: '/static/images/bread.jpg', options: [{ weight: '400g', price: 50 }] },
//                 { id: 23, name: 'Soda', price: 60, image: '/static/images/soda.jpg', options: [{ weight: '500ml', price: 60 }, { weight: '1L', price: 100 }] },
//                 { id: 24, name: 'Mandazi', price: 10, image: '/static/images/mandazi.jpg', options: [{ weight: '1pc', price: 10 }] },
//                 { id: 25, name: 'Cabbage', price: 80, image: '/static/images/cabbage.jpg', options: [{ weight: '1kg', price: 80 }] },
//                 { id: 26, name: 'Tomatoes', price: 20, image: '/static/images/tomatoes.jpg', options: [{ weight: '1pc', price: 20 }] },
//                 { id: 27, name: 'Onions', price: 15, image: '/static/images/onions.jpg', options: [{ weight: '1pc', price: 15 }] },
//                 { id: 28, name: 'Charcoal', price: 50, image: '/static/images/charcoal.jpg', options: [{ weight: '2kg', price: 50 }] },
//                 { id: 29, name: 'Matchbox', price: 5, image: '/static/images/matchbox.jpg', options: [{ weight: '1pc', price: 5 }] },
                
//     ];

//     const [searchTerm, setSearchTerm] = useState('');
//     const [cart, setCart] = useState([]);
//     const [totalCost, setTotalCost] = useState(0);

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const addToCart = (product, selectedOption) => {
//         const newCart = [...cart];
//         const existingItem = newCart.find(item => item.id === product.id && item.weight === selectedOption.weight);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             newCart.push({ ...product, weight: selectedOption.weight, quantity: 1, price: selectedOption.price });
//         }

//         setCart(newCart);
//         setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//     };

//     const handleOptionChange = (productId, selectedOption) => {
//         if (selectedOption) {
//             const product = products.find(p => p.id === productId);
//             addToCart(product, selectedOption);
//         }
//     };

//     const removeFromCart = (itemToRemove) => {
//         const newCart = cart.filter(item => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight);
//         setCart(newCart);
//         setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//     };

//     const checkout = () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty!");
//             return;
//         }

//         // For demonstration purposes, we'll log the sale to the console.
//         console.log("Sale history:", cart);
        
//         // Clear the cart after checkout
//         setCart([]);
//         setTotalCost(0);
//         alert("Checkout successful! Thank you for your purchase.");
//     };

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

//             {/* Search Bar */}
//             <input
//                 type="text"
//                 className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
//                 placeholder="Search for a product..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <div className="flex flex-col md:flex-row gap-8">
//                 {/* Product List */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id} className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
//                             <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
//                             <div className="p-4">
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
//                                 <p className="text-gray-600 mb-4">Starting from: <span className="text-green-600 font-bold">Ksh {product.price}</span></p>
//                                 <select
//                                     onChange={(e) => handleOptionChange(product.id, product.options[e.target.selectedIndex - 1])}
//                                     className="border border-gray-300 p-2 rounded w-full mb-4"
//                                 >
//                                     <option value="">Select Weight</option>
//                                     {product.options.map((option) => (
//                                         <option key={option.weight} value={option.weight}>
//                                             {option.weight} - Ksh {option.price}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 <button
//                                     className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
//                                     onClick={() => addToCart(product, product.options[0])}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cart Section */}
//                 <div className="w-full md:w-1/4">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//                     <ul className="space-y-2">
//                         {cart.map((item, index) => (
//                             <li key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                                 <span>{item.name} ({item.weight}) x {item.quantity}</span>
//                                 <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
//                                 <button
//                                     className="text-red-500 ml-4"
//                                     onClick={() => removeFromCart(item)}
//                                 >
//                                     &times;
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="mt-6">
//                         <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-green-600">Ksh {totalCost}</span></h3>
//                     </div>
//                     <button
//                         className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
//                         onClick={checkout}
//                     >
//                         Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Quicksale;

// import { useState } from 'react';
// // import { createQuickSale } from '../api'; // Import the createQuickSale function

// const Quicksale = () => {
//     const products = [
//   { id: 1, name: 'Pishori Rice', price: 200, image: '/static/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');
//     const [cart, setCart] = useState([]);
//     const [totalCost, setTotalCost] = useState(0);

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const addToCart = (product, selectedOption) => {
//         const newCart = [...cart];
//         const existingItem = newCart.find(item => item.id === product.id && item.weight === selectedOption.weight);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             newCart.push({ ...product, weight: selectedOption.weight, quantity: 1, price: selectedOption.price });
//         }

//         setCart(newCart);
//         setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//     };

//     const handleOptionChange = (productId, selectedOption) => {
//         if (selectedOption) {
//             const product = products.find(p => p.id === productId);
//             addToCart(product, selectedOption);
//         }
//     };

//     const removeFromCart = (itemToRemove) => {
//         const newCart = cart.filter(item => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight);
//         setCart(newCart);
//         setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
//     };

//     const checkout = async () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty!");
//             return;
//         }

//         // Prepare the data to send to the backend
//         const salesData = cart.map(item => ({
//             product_name: item.name,
//             price: item.price,
//             weight: item.weight,
//             quantity: item.quantity,
//         }));

//         try {
//             // Send the sales data to the backend
//             for (const sale of salesData) {
//                 await createQuickSale(sale);
//             }
//             alert("Checkout successful! Thank you for your purchase.");

//             // Clear the cart after successful checkout
//             setCart([]);
//             setTotalCost(0);
//         } catch (error) {
//             console.error("Checkout failed:", error);
//             alert("An error occurred during checkout. Please try again.");
//         }
//     };

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

//             {/* Search Bar */}
//             <input
//                 type="text"
//                 className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
//                 placeholder="Search for a product..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <div className="flex flex-col md:flex-row gap-8">
//                 {/* Product List */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id} className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
//                             <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
//                             <div className="p-4">
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
//                                 <p className="text-gray-600 mb-4">Starting from: <span className="text-green-600 font-bold">Ksh {product.price}</span></p>
//                                 <select
//                                     onChange={(e) => handleOptionChange(product.id, product.options[e.target.selectedIndex - 1])}
//                                     className="border border-gray-300 p-2 rounded w-full mb-4"
//                                 >
//                                     <option value="">Select Weight</option>
//                                     {product.options.map((option) => (
//                                         <option key={option.weight} value={option.weight}>
//                                             {option.weight} - Ksh {option.price}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 <button
//                                     className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
//                                     onClick={() => addToCart(product, product.options[0])}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cart Section */}
//                 <div className="w-full md:w-1/4">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//                     <ul className="space-y-2">
//                         {cart.map((item, index) => (
//                             <li key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                                 <span>{item.name} ({item.weight}) x {item.quantity}</span>
//                                 <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
//                                 <button
//                                     className="text-red-500 ml-4"
//                                     onClick={() => removeFromCart(item)}
//                                 >
//                                     &times;
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="mt-6">
//                         <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-green-600">Ksh {totalCost}</span></h3>
//                     </div>
//                     <button
//                         className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
//                         onClick={checkout}
//                     >
//                         Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Quicksale;



import { useState } from 'react';
import axios from 'axios';

const Quicksale = () => {
  const products = [
    // Sample product list
    { id: 1, name: 'Pishori Rice', price: 200, image: '/static/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
    { id: 2, name: 'Basmati Rice', price: 180, image: '/static/images/basmati_rice.jpg', options: [{ weight: '250g', price: 45 }, { weight: '500g', price: 90 }, { weight: '1kg', price: 180 }] },
    // ... Other products
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product, selectedOption) => {
    const newCart = [...cart];
    const existingItem = newCart.find(item => item.id === product.id && item.weight === selectedOption.weight);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ ...product, weight: selectedOption.weight, quantity: 1, price: selectedOption.price });
    }

    setCart(newCart);
    setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const handleOptionChange = (productId, selectedOption) => {
    if (selectedOption) {
      const product = products.find(p => p.id === productId);
      addToCart(product, selectedOption);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const newCart = cart.filter(item => item.id !== itemToRemove.id || item.weight !== itemToRemove.weight);
    setCart(newCart);
    setTotalCost(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const checkout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const saleData = { items: cart, total: totalCost };
      const response = await axios.post('http://127.0.0.1:8000/api/sales/', saleData);
      
      if (response.status === 201) {
        // Handle success - clear cart, reset total cost
        setCart([]);
        setTotalCost(0);
        alert("Checkout successful! Thank you for your purchase.");
      }
    } catch (error) {
      console.error("Error saving sale:", error);
      setError('Failed to save sale. Please try again.');
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Sale</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="border border-gray-300 p-2 mb-6 rounded w-full max-w-lg mx-auto block"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

          <div className="flex flex-col md:flex-row gap-8">
        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">Starting from: <span className="text-green-600 font-bold">Ksh {product.price}</span></p>
                <select
                  onChange={(e) => handleOptionChange(product.id, product.options[e.target.selectedIndex - 1])}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                >
                         <option value="">Select Weight</option>
                  {product.options.map((option) => (
                    <option key={option.weight} value={option.weight}>
                      {option.weight} - Ksh {option.price}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
                  onClick={() => addToCart(product, product.options[0])}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

 {/* Cart Section */}
 <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
          {error && <p className="text-red-600">{error}</p>}
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                <span>{item.name} ({item.weight}) x {item.quantity}</span>
                <span className="text-gray-600">Ksh {item.price * item.quantity}</span>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => removeFromCart(item)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-green-600">Ksh {totalCost}</span></h3>
          </div>
          <button
            className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600 transition duration-200"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quicksale;