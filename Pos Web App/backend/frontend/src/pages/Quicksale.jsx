// import { useState } from 'react';

// const Quicksale = ({ onSalesUpdate }) => {
//     const products = [
//         { id: 1, name: 'Pishori Rice', price: 200, image: '/static/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//         { id: 2, name: 'Basmati Rice', price: 180, image: '/static/images/basmati_rice.jpg', options: [{ weight: '250g', price: 45 }, { weight: '500g', price: 90 }, { weight: '1kg', price: 180 }] },
//         { id: 3, name: 'Biriyani Rice', price: 200, image: '/static/images/biriyani_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
//         { id: 4, name: 'Maize Flour', price: 150, image: '/static/images/maize_flour.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 150 }] },
//         { id: 5, name: 'Wheat Flour', price: 120, image: '/static/images/wheat_flour.jpg', options: [{ weight: '250g', price: 30 }, { weight: '500g', price: 60 }, { weight: '1kg', price: 120 }] },
//         { id: 6, name: 'Sugar', price: 160, image: '/static/images/sugar.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 160 }] },
//         { id: 7, name: 'Salt', price: 20, image: '/static/images/salt.jpg', options: [{ weight: '250g', price: 5 }, { weight: '500g', price: 10 }, { weight: '1kg', price: 20 }] },
//         { id: 8, name: 'Cooking Oil', price: 240, image: '/static/images/cooking_oil.jpg', options: [{ weight: '250ml', price: 60 }, { weight: '500ml', price: 120 }, { weight: '1L', price: 240 }] },
//         { id: 9, name: 'Indomie', price: 50, image: '/static/images/indomie.jpg', options: [{ weight: '75g', price: 50 }] },
//         { id: 10, name: 'Spaghetti', price: 100, image: '/static/images/spaghetti.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }] },
//         { id: 11, name: 'Canned Beans', price: 100, image: '/static/images/canned_beans.jpg', options: [{ weight: '400g', price: 100 }] },
//         { id: 12, name: 'Tomato Sauce', price: 150, image: '/static/images/tomato_sauce.jpg', options: [{ weight: '500g', price: 150 }] },
//         { id: 13, name: 'Tea', price: 40, image: '/static/images/tea.jpg', options: [{ weight: '100g', price: 40 }] },
//         { id: 14, name: 'Coffee', price: 80, image: '/static/images/coffee.jpg', options: [{ weight: '100g', price: 80 }] },
//         { id: 15, name: 'Biscuits', price: 60, image: '/static/images/biscuits.jpg', options: [{ weight: '200g', price: 60 }] },
//         { id: 16, name: 'Laundry Soap', price: 50, image: '/static/images/laundry_soap.jpg', options: [{ weight: '500g', price: 50 }] },
//         { id: 17, name: 'Dish Soap', price: 70, image: '/static/images/dish_soap.jpg', options: [{ weight: '500ml', price: 70 }] },
//         { id: 18, name: 'Fresh Milk', price: 120, image: '/static/images/fresh_milk.jpg', options: [{ weight: '1L', price: 120 }] },
//         { id: 19, name: 'Yogurt', price: 90, image: '/static/images/yogurt.jpg', options: [{ weight: '500g', price: 90 }] },
//         { id: 20, name: 'Eggs', price: 180, image: '/static/images/eggs.jpg', options: [{ weight: 'dozen', price: 180 }] },
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

//         const saleData = cart.map(item => ({
//             date: new Date().toISOString().split('T')[0],
//             items: `${item.name} (${item.weight})`,
//             total: item.price * item.quantity,
//             paymentMethod: 'Cash', // Default for now
//         }));

//         onSalesUpdate(saleData); // Send sales data to the parent component

//         setCart([]);
//         setTotalCost(0);
//         alert("Checkout successful! Thank you for your purchase.");
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Quick Sale</h1>

//             {/* Search Bar */}
//             <input
//                 type="text"
//                 className="border p-2 mb-4 w-full"
//                 placeholder="Search for a product..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <div className="flex">
//                 {/* Product List */}
//                 <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
//                             <img className="w-full" src={product.image} alt={product.name} />
//                             <div className="px-6 py-4">
//                                 <div className="font-bold text-xl mb-2">{product.name}</div>
//                                 <p className="text-gray-700 text-base">
//                                     Price: Ksh {product.price}
//                                 </p>
//                             </div>
//                             <div className="px-6 pt-4 pb-2">
//                                 <select
//                                     onChange={(e) => handleOptionChange(product.id, product.options[e.target.selectedIndex])}
//                                     className="border p-2 mb-2 w-full"
//                                 >
//                                     <option value="">Select Weight</option>
//                                     {product.options.map((option) => (
//                                         <option key={option.weight} value={option.weight}>
//                                             {option.weight} - Ksh {option.price}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 <button
//                                     className="bg-blue-500 text-white p-2 mt-2 w-full"
//                                     onClick={() => addToCart(product, product.options[0])} // Default to the first option if not selected
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cart Section */}
//                 <div className="w-1/4 pl-4">
//                     <h2 className="text-xl font-bold">Cart</h2>
//                     <ul className="list-disc pl-5">
//                         {cart.map((item) => (
//                             <li key={item.id}>
//                                 {item.name} ({item.weight}) x {item.quantity} = Ksh {item.price * item.quantity}
//                                 <button 
//                                     className="ml-2 text-red-500"
//                                     onClick={() => removeFromCart(item)}
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="mt-4">
//                         <h3 className="text-lg font-bold">Total: Ksh {totalCost}</h3>
//                     </div>
//                     <button 
//                         className="bg-green-500 text-white p-2 mt-4 w-full"
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

const Quicksale = () => {
    const products = [
        { id: 1, name: 'Pishori Rice', price: 200, image: '/static/images/pishori_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
        { id: 2, name: 'Basmati Rice', price: 180, image: '/static/images/basmati_rice.jpg', options: [{ weight: '250g', price: 45 }, { weight: '500g', price: 90 }, { weight: '1kg', price: 180 }] },
        { id: 3, name: 'Biriyani Rice', price: 200, image: '/static/images/biriyani_rice.jpg', options: [{ weight: '250g', price: 50 }, { weight: '500g', price: 100 }, { weight: '1kg', price: 200 }] },
        { id: 4, name: 'Maize Flour', price: 150, image: '/static/images/maize_flour.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 150 }] },
        { id: 5, name: 'Wheat Flour', price: 120, image: '/static/images/wheat_flour.jpg', options: [{ weight: '250g', price: 30 }, { weight: '500g', price: 60 }, { weight: '1kg', price: 120 }] },
        { id: 6, name: 'Sugar', price: 160, image: '/static/images/sugar.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }, { weight: '1kg', price: 160 }] },
        { id: 7, name: 'Salt', price: 20, image: '/static/images/salt.jpg', options: [{ weight: '250g', price: 5 }, { weight: '500g', price: 10 }, { weight: '1kg', price: 20 }] },
        { id: 8, name: 'Cooking Oil', price: 240, image: '/static/images/cooking_oil.jpg', options: [{ weight: '250ml', price: 60 }, { weight: '500ml', price: 120 }, { weight: '1L', price: 240 }] },
        { id: 9, name: 'Indomie', price: 50, image: '/static/images/indomie.jpg', options: [{ weight: '75g', price: 50 }] },
        { id: 10, name: 'Spaghetti', price: 100, image: '/static/images/spaghetti.jpg', options: [{ weight: '250g', price: 40 }, { weight: '500g', price: 80 }] },
        { id: 11, name: 'Canned Beans', price: 100, image: '/static/images/canned_beans.jpg', options: [{ weight: '400g', price: 100 }] },
        { id: 12, name: 'Tomato Sauce', price: 150, image: '/static/images/tomato_sauce.jpg', options: [{ weight: '500g', price: 150 }] },
        { id: 13, name: 'Tea', price: 40, image: '/static/images/tea.jpg', options: [{ weight: '100g', price: 40 }] },
        { id: 14, name: 'Coffee', price: 80, image: '/static/images/coffee.jpg', options: [{ weight: '100g', price: 80 }] },
        { id: 15, name: 'Biscuits', price: 60, image: '/static/images/biscuits.jpg', options: [{ weight: '200g', price: 60 }] },
        { id: 16, name: 'Laundry Soap', price: 50, image: '/static/images/laundry_soap.jpg', options: [{ weight: '500g', price: 50 }] },
        { id: 17, name: 'Dish Soap', price: 70, image: '/static/images/dish_soap.jpg', options: [{ weight: '500ml', price: 70 }] },
        { id: 18, name: 'Fresh Milk', price: 120, image: '/static/images/fresh_milk.jpg', options: [{ weight: '1L', price: 120 }] },
        { id: 19, name: 'Yogurt', price: 90, image: '/static/images/yogurt.jpg', options: [{ weight: '500g', price: 90 }] },
        { id: 20, name: 'Eggs', price: 180, image: '/static/images/eggs.jpg', options: [{ weight: 'dozen', price: 180 }] },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

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

    const checkout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // For demonstration purposes, we'll log the sale to the console.
        console.log("Sale history:", cart);
        
        // Clear the cart after checkout
        setCart([]);
        setTotalCost(0);
        alert("Checkout successful! Thank you for your purchase.");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Quick Sale</h1>

            {/* Search Bar */}
            <input
                type="text"
                className="border p-2 mb-4 w-full"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex">
                {/* Product List */}
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={product.image} alt={product.name} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{product.name}</div>
                                <p className="text-gray-700 text-base">
                                    Price: Ksh {product.price}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <select
                                    onChange={(e) => handleOptionChange(product.id, product.options[e.target.selectedIndex])}
                                    className="border p-2 mb-2 w-full"
                                >
                                    <option value="">Select Weight</option>
                                    {product.options.map((option) => (
                                        <option key={option.weight} value={option.weight}>
                                            {option.weight} - ksh{option.price}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="bg-blue-500 text-white p-2 mt-2 w-full"
                                    onClick={() => addToCart(product, product.options[0])} // Default to the first option if not selected
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="w-1/4 pl-4">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <ul className="list-disc pl-5">
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} ({item.weight}) x {item.quantity} = ksh{item.price * item.quantity}
                                <button 
                                    className="ml-2 text-red-500"
                                    onClick={() => removeFromCart(item)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Total: ksh{totalCost}</h3>
                    </div>
                    <button 
                        className="bg-green-500 text-white p-2 mt-4 w-full"
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

