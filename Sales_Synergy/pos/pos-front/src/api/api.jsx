import axios from 'axios';

// Set up the base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User
export const registerUser = async (data) => {
  const response = await api.post('/register/', data);
  return response.data;
};

// Login User
export const loginUser = async (data) => {
  const response = await api.post('/login/', data);
  return response.data;
};

// Fetch products
export const getProducts = async () => {
  const response = await api.get('/products/');
  return response.data;
};

// Fetch Cart Items
export const getCartItems = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await api.get('/checkout/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Checkout Cart
export const checkoutCart = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await api.post('/checkout/', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// **Get User Profile**
export const getProfile = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await api.get('/profile/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// **Update User Profile**
export const updateProfile = async (data) => {
  const token = localStorage.getItem('accessToken');
  const response = await api.put('/profile/update/', data, { // Change the URL as necessary
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default api;
