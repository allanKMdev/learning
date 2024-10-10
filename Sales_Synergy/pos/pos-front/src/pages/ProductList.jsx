// import  { useEffect, useState } from 'react';
// import { getProducts } from '../api/api'; 

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getProducts();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map(product => (
//           <div key={product.id} className="border p-4 rounded-lg">
//             <img src={product.image} alt={product.name} className="h-32 w-full object-cover mb-2" />
//             <h2 className="font-bold">{product.name}</h2>
//             <p>${product.price}</p>
//             <button className="bg-blue-500 text-white p-2 rounded mt-2">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// src/components/ProductList.jsx
// src/components/ProductList.jsx


const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg md:text-xl font-bold">{product.name}</h2>
          <p className="text-sm md:text-base">{product.description}</p>
          <p className="text-lg font-semibold">Price: ${product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
