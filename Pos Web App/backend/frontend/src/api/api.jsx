// import axios from 'axios';

// // Create an Axios instance with the backend URL
// const api = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/', // Django backend base URL
// });

// // Add a request interceptor to include the JWT token in the request headers
// api.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// // Export the Axios instance
// export default api;


import axios from 'axios';

// Create an Axios instance with the backend URL
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // Django backend base URL
});

// Add a request interceptor to include the JWT token in the request headers
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Export the Axios instance
export default api; 
