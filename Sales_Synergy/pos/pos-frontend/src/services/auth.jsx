
import axios from 'axios';

// Define API endpoint
const API_URL = "http://localhost:8000/api/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login/", { username, password })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const register = (username, password) => {
  return axios.post(API_URL + "register/", { username, password });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
