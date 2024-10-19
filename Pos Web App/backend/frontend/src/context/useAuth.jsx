// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';  // Import PropTypes for validation

// import { authenticated_user, login, logout, register } from '../api/endpoints';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const nav = useNavigate();

//   const get_authenticated_user = async () => {
//     try {
//       const user = await authenticated_user();
//       setUser(user);
//     } catch (error) {
//       setUser(null); // If the request fails, set the user to null
//     } finally {
//       setLoading(false); // Set loading to false after request completes
//     }
//   };

//   const loginUser = async (username, password) => {
//     const user = await login(username, password);
//     if (user) {
//       setUser(user);
//       nav('/');
//     } else {
//       alert('Incorrect username or password');
//     }
//   };

//   const logoutUser = async () => {
//     await logout();
//     nav('/login');
//   };

//   const registerUser = async (username, email, password, confirm_password) => {
//     try {
//       if (password === confirm_password) {
//         await register(username, email, password);
//         alert('User successfully registered');
//         nav('/login');
//       }
//     } catch {
//       alert('error registering user');
//     }
//   };

//   useEffect(() => {
//     get_authenticated_user();
//   }, [window.location.pathname]);

//   return (
//     <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, registerUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Add PropTypes validation for the children prop
// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,  // Ensures children is a valid React node and required
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);




// // import { createContext, useContext, useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import PropTypes from 'prop-types';  // Import PropTypes for validation

// // import { authenticated_user, login, logout, register } from '../api/endpoints';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const nav = useNavigate();

// //   const get_authenticated_user = async () => {
// //     try {
// //       const user = await authenticated_user();
// //       setUser(user);
// //     } catch (error) {
// //       setUser(null); // If the request fails, set the user to null
// //     } finally {
// //       setLoading(false); // Set loading to false after request completes
// //     }
// //   };

// //   const loginUser = async (username, password) => {
// //     const user = await login(username, password);
// //     if (user) {
// //       setUser(user);
// //       nav('/');
// //     } else {
// //       alert('Incorrect username or password');
// //     }
// //   };

// //   const logoutUser = async () => {
// //     await logout();
// //     nav('/login');
// //   };

// //   const registerUser = async (username, email, password, confirm_password) => {
// //     try {
// //       if (password === confirm_password) {
// //         await register(username, email, password);
// //         alert('User successfully registered');
// //         nav('/login');
// //       }
// //     } catch {
// //       alert('Error registering user');
// //     }
// //   };

// //   // Runs once when component mounts
// //   useEffect(() => {
// //     get_authenticated_user();
// //   }, []);  // Empty array ensures effect runs only once on mount

// //   return (
// //     <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, registerUser }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // // Add PropTypes validation for the children prop
// // AuthProvider.propTypes = {
// //   children: PropTypes.node.isRequired,  // Ensures children is a valid React node and required
// // };

// // // Custom hook to use the AuthContext
// // export const useAuth = () => useContext(AuthContext);


// // src/context/AuthProvider.jsx
// import { createContext, useState, useEffect } from 'react';
// import { login, register } from './src/api/endpoint';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Optionally fetch user info here if you store user data in local storage
//       setUser({ token });
//     }
//     setLoading(false);
//   }, []);

//   const handleLogin = async (email, password) => {
//     const userData = await login(email, password);
//     setUser(userData);
//     localStorage.setItem('token', userData.token); // Store token in local storage
//   };

//   const handleRegister = async (email, password) => {
//     const userData = await register(email, password);
//     setUser(userData);
//     localStorage.setItem('token', userData.token); // Store token
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('token'); // Remove token from local storage
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };