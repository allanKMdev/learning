// // authUtils.js
// import { authenticated_user, login, logout, register } from '../api/endpoints';

// export const get_authenticated_user = async () => {
//   try {
//     const user = await authenticated_user();
//     return user;
//   } catch (error) {
//     return null;  // If the request fails, return null
//   }
// };

// export const loginUser = async (username, password, setUser, nav) => {
//   const user = await login(username, password);
//   if (user) {
//     setUser(user);
//     nav('/');
//   } else {
//     alert('Incorrect username or password');
//   }
// };

// export const logoutUser = async (nav) => {
//   await logout();
//   nav('/login');
// };

// export const registerUser = async (username, email, password, confirm_password, nav) => {
//   try {
//     if (password === confirm_password) {
//       await register(username, email, password);
//       alert('User successfully registered');
//       nav('/login');
//     }
//   } catch {
//     alert('error registering user');
//   }
// };
