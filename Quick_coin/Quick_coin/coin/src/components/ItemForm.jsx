// import { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes

// const ItemForm = ({ onAddItem }) => {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [picture, setPicture] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onAddItem({ name, price, picture });
//         setName('');
//         setPrice('');
//         setPicture('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
//             <div className="mb-4">
//                 <label className="block text-gray-700">Item Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Price:</label>
//                 <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Picture URL:</label>
//                 <input
//                     type="text"
//                     value={picture}
//                     onChange={(e) => setPicture(e.target.value)}
//                     className="mt-1 block w-full border-gray-300 rounded-md"
//                 />
//             </div>
//             <button 
//                 type="submit" 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//                 Add Item
//             </button>
//         </form>
//     );
// };

// // PropTypes validation
// ItemForm.propTypes = {
//     onAddItem: PropTypes.func.isRequired, // onAddItem is a required function prop
// };

// export default ItemForm;


import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemForm = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (price < 0) {
            alert("Price cannot be negative");
            return;
        }
        
        onAddItem({ name, price, picture });

        // Clear form fields after submission
        setName('');
        setPrice('');
        setPicture('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Item Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="0"
                    className="mt-1 block w-full border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="picture" className="block text-gray-700">Picture URL:</label>
                <input
                    type="url"
                    id="picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    placeholder="http://example.com/image.jpg"
                />
            </div>
            <button 
                type="submit" 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
                Add Item
            </button>
        </form>
    );
};

// PropTypes validation
ItemForm.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

export default ItemForm;