// src/pages/Home.jsx

import Navbar from '../components/Navbar'; // Import the NavBar component

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar /> {/* Render the NavBar at the top of the page */}
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Welcome to My POS App!</h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple, efficient, and user-friendly Point of Sale system for all your business needs.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <a
            href="/sales"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition duration-300"
          >
            Go to Sales
          </a>
          <a
            href="/inventory"
            className="bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-500 transition duration-300"
          >
            Manage Inventory
          </a>
          <a
            href="/customers"
            className="bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-500 transition duration-300"
          >
            View Customers
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
