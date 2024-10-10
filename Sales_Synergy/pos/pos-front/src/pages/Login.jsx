// // Login.jsx

// import useAuth from '../hooks/useAuth'; // Adjust the path as necessary
// import useForm from '../hooks/useForm'; // Adjust the path as necessary
// import './Auth.css'; // Import your styles

// const Login = () => {
//     const { login, error, loading } = useAuth(); // Extract login function and state from useAuth
//     const {
//         username,
//         password,
//         errorMessage,
//         setUsername,
//         setPassword,
//         handleSubmit,
//     } = useForm('login'); // Initialize useForm for login

//     const handleLogin = async (data) => {
//         await login(data.username, data.password); // Use login function from useAuth
//     };

//     return (
//         <div className="auth-container">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit(handleLogin)}>
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
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Logging in...' : 'Login'}
//                 </button>
//                 {error || errorMessage ? <p style={{ color: 'red' }}>{error || errorMessage}</p> : null}
//             </form>
//         </div>
//     );
// };

// export default Login;


// src/pages/Login.jsx
import  { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
