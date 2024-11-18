// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}token/`, {
    username,
    password,
  });
  if (response.data.access) {
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
  }
  return response.data;
};

export const register = async (username, password, email) => {
  return axios.post(`${API_URL}register/`, { username, password, email });
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const getAccessToken = () => localStorage.getItem('accessToken');
