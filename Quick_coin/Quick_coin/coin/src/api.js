// import axios from 'axios';
// import { ACCESS_TOKEN } from './constants';

// const apiUrl = "http://127.0.0.1:8000"


// const api = axios.create({
//     baseUrl : import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
// });

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem(ACCESS_TOKEN);
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


// export default api


// import axios from 'axios';
// const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });

// // QuickSale
// export const fetchQuickSales = () => API.get('/quicksale/');
// export const createQuickSale = (data) => API.post('/quicksale/', data);

// // Inventory
// export const fetchInventory = () => API.get('/inventory/');
// export const createInventoryItem = (data) => API.post('/inventory/', data);

// // Customer
// export const fetchCustomers = () => API.get('/customers/');
// export const createCustomer = (data) => API.post('/customers/', data);

// // Sale History
// export const fetchSaleHistory = () => API.get('/salehistory/');
// export const createSaleHistory = (data) => API.post('/salehistory/', data);




// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8000/api',  // Adjust the base URL if needed
// });

// export const registerUser = async (userData) => {
//     try {
//         const response = await api.post('/register/', userData);
//         return response.data;
//     } catch (error) {
//         console.error("Registration error:", error);
//         throw error;  // Handle error appropriately
//     }
// };

// Other API functions (login, etc.) can be added here


// // src/api.js
// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8000/api/', // Django backend URL
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export default api;




import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',  // Adjust the base URL if your endpoint changes
});

// Function to set token for axios requests
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// Example of a user registration function
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register/', userData);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        throw handleError(error);  // Handle error appropriately
    }
};

// Example of a user login function
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/token/', credentials);
        const { access } = response.data;
        setAuthToken(access);  // Set token for future requests
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw handleError(error);  // Handle error appropriately
    }
};
// Standard error handler function
const handleError = (error) => {
    if (error.response) {
        // Request made and server responded
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        return error.response.data.message || 'An error occurred';
    } else if (error.request) {
        // Request made but no response received
        console.error('Request:', error.request);
        return 'No response received from server';
    } else {
        // Error setting up the request
        console.error('Error message:', error.message);
        return error.message;
    }
};

// Usage examples for CRUD operations
export const fetchItems = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw handleError(error);
    }
};

export const updateItem = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error("Error updating item:", error);
        throw handleError(error);
    }
};

export const deleteItem = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error deleting item:", error);
        throw handleError(error);
    }
};

export default api