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
  try {
    const response = await api.post('/register/', data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Login User
export const loginUser = async (data) => {
  try {
    const response = await api.post('/login/', data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Fetch products
export const getProducts = async () => {
  try {
    const response = await api.get('/products/');
    return response.data;
  } catch (error) {
    console.error("Fetch products error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Fetch Cart Items
export const getCartItems = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await api.get('/checkout/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch cart items error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Checkout Cart
export const checkoutCart = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await api.post('/checkout/', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Checkout error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Get User Profile
export const getProfile = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await api.get('/profile/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch profile error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

// Update User Profile
export const updateProfile = async (data) => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await api.put('/profile/update/', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Update profile error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

export default api;
