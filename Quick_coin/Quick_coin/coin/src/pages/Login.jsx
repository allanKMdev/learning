// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import Header from "../components/Header";
// import Swal from 'sweetalert2'; // Correct import for SweetAlert2

// const LoginPage = () => {
//   const { loginUser } = useContext(AuthContext);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // Client-side validation
//     if (!email || !password) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Please fill in all fields.',
//         icon: 'error',
//         confirmButtonText: 'Okay',
//       });
//       return;
//     }

//     // Attempt to log in the user
//     const success = await loginUser(email, password);
    
//     if (!success) {
//       Swal.fire({
//         title: 'Login Failed!',
//         text: 'Invalid username or password.',
//         icon: 'error',
//         confirmButtonText: 'Try Again',
//       });
//     }
//   };

//   return (
//     <>
//       <Header />
//       <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col col-xl-10">
//               <div className="card" style={{ borderRadius: "1rem" }}>
//                 <div className="row g-0">
//                   <div className="col-md-6 col-lg-5 d-none d-md-block">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                       alt="login form"
//                       className="img-fluid"
//                       style={{ borderRadius: "1rem 0 0 1rem" }}
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                     <div className="card-body p-4 p-lg-5 text-black">
//                       <form onSubmit={handleSubmit}>
//                         <div className="d-flex align-items-center mb-3 pb-1">
//                           <i
//                             className="fas fa-cubes fa-2x me-3"
//                             style={{ color: "#ff6219" }}
//                           />
//                           <div className="d-flex align-items-center mb-3 pb-1">
//                             <span className="h2 fw-bold mb-0">Welcome back 👋</span>
//                           </div>
//                         </div>
//                         <h5
//                           className="fw-normal mb-3 pb-3"
//                           style={{ letterSpacing: 1 }}
//                         >
//                           Sign into your account
//                         </h5>
//                         <div className="form-outline mb-4">
//                           <input
//                             type="email"
//                             id="form2Example17"
//                             className="form-control form-control-lg"
//                             name="email"
//                             required // Added required attribute for better accessibility
//                           />
//                           <label className="form-label" htmlFor="form2Example17">
//                             Email address
//                           </label>
//                         </div>
//                         <div className="form-outline mb-4">
//                           <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="form-control form-control-lg"
//                             required // Added required attribute for better accessibility
//                           />
//                           <label className="form-label" htmlFor="password">
//                             Password
//                           </label>
//                         </div>
//                         <div className="pt-1 mb-4">
//                           <button
//                             className="btn btn-dark btn-lg btn-block"
//                             type="submit"
//                           >
//                             Login
//                           </button>
//                         </div>
//                         <a className="small text-muted" href="#!">
//                           Forgot password?
//                         </a>
//                         <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                           Do you have an account?{" "}
//                           <Link to="/register" style={{ color: "#393f81" }}>
//                             Register here
//                           </Link>
//                         </p>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LoginPage;

// src/pages/Login.jsx
// import  { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const Login = () => {
//     const { login } = useContext(AuthContext);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(username, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
//             <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


// import  { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       // Redirect to the dashboard or a specific page after successful login
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <input 
//           type="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder="Email" 
//           required 
//         />
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Password" 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// components/Login.js
import  { useState } from 'react';
import { login } from '../services/authService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      window.location.href = '/dashboard';  // Redirect after login
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;