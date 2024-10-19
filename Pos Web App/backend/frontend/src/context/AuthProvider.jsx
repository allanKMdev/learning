// // import { createContext, useContext, useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import PropTypes from 'prop-types';  // For prop type validation
// // import { get_authenticated_user, loginUser, logoutUser, registerUser } from './authUtils';  // Import utility functions

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     const fetchAuthenticatedUser = async () => {
// //       const authenticatedUser = await get_authenticated_user();
// //       setUser(authenticatedUser);
// //       setLoading(false);
// //     };

// //     fetchAuthenticatedUser();
// //   }, []);  // Run only once on component mount

// //   return (
// //     <AuthContext.Provider value={{
// //       user,
// //       loading,
// //       loginUser: (username, password) => loginUser(username, password, setUser, nav),
// //       logoutUser: () => logoutUser(nav),
// //       registerUser: (username, email, password, confirm_password) => registerUser(username, email, password, confirm_password, nav),
// //     }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // AuthProvider.propTypes = {
// //   children: PropTypes.node.isRequired,  // Add prop types validation
// // };

// // export const useAuth = () => useContext(AuthContext);


// // src/context/AuthProvider.jsx
// import { createContext, useState, useEffect } from 'react';
// import { login, register } from './api/endpoints';

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