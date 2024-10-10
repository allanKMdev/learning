// // Register.jsx

// import UserForm from './userForm'; // Import the UserForm component
// // Register.jsx
// import React from 'react';
// import useAuth from '../hooks/useAuth'; // Adjust the path as necessary
// import useForm from '../hooks/useForm'; // Adjust the path as necessary
// import './Auth.css'; // Import your styles

// const Register = () => {
//     const { register, error, loading } = useAuth(); // Extract register function and state from useAuth
//     const {
//         username,
//         password,
//         confirmPassword,
//         errorMessage,
//         setUsername,
//         setPassword,
//         setConfirmPassword,
//         handleSubmit,
//     } = useForm('register'); // Initialize useForm for registration

//     const handleRegister = async (data) => {
//         await register(data.username, data.password); // Use register function from useAuth
//     };

//     return (
//         <div className="auth-container">
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit(handleRegister)}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Confirm Password:</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Registering...' : 'Register'}
//                 </button>
//                 {error || errorMessage ? <p style={{ color: 'red' }}>{error || errorMessage}</p> : null}
//             </form>
//         </div>
//     );
// };

// export default Register;


// src/pages/Register.jsx
import  { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
