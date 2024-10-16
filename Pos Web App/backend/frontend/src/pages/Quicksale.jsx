import  { useState } from 'react';  // Import useState from React
import ItemForm from '../components/ItemForm';

const QuickSale = () => {
    const [items, setItems] = useState([]);  // Initialize the items state

    const handleAddItem = (item) => {
        setItems([...items, item]);  // Add new item to the items array
    };

    return (
        <div>
            <h1>Quick Sale</h1>
            <ItemForm onAddItem={handleAddItem} />
            <h2>Items to Sell</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuickSale;






// import React, { useState } from 'react';

// const QuickSale = () => {
//     // Sample product data (you can fetch this from an API)
//     const products = [
//         { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
//         { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
//         { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');
//     const [cart, setCart] = useState([]);

//     // Filter products based on search term
//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Add item to the cart
//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find((item) => item.id === product.id);
//             if (existingProduct) {
//                 return prevCart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             } else {
//                 return [...prevCart, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     // Calculate total cost
//     const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
//                         <div key={product.id} className="border p-4 rounded shadow">
//                             <img src={product.image} alt={product.name} className="mb-4" />
//                             <h2 className="text-xl font-bold">{product.name}</h2>
//                             <p>${product.price}</p>
//                             <button
//                                 className="bg-blue-500 text-white p-2 mt-2 w-full"
//                                 onClick={() => addToCart(product)}
//                             >
//                                 Add to Cart
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cart Section */}
//                 <div className="w-1/4 pl-4">
//                     <h2 className="text-xl font-bold">Cart</h2>
//                     <ul className="list-disc pl-5">
//                         {cart.map((item) => (
//                             <li key={item.id}>
//                                 {item.name} x {item.quantity} = ${item.price * item.quantity}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="mt-4">
//                         <h3 className="text-lg font-bold">Total: ${totalCost}</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QuickSale;
