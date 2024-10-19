// import  { useState } from 'react';
// import api from '../services/api'; // Import Axios instance
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         try {
//             await api.post('auth/register/', { email, password });
//             navigate('/login');  // Redirect to login after successful registration
//         } catch (error) {
//             setError('Error creating account');
//         }
//     };

//     return (
//         <div>
//             <h1>Register</h1>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     placeholder="Email" 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     placeholder="Password" 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     value={confirmPassword} 
//                     onChange={(e) => setConfirmPassword(e.target.value)} 
//                     placeholder="Confirm Password" 
//                     required 
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// // export default Register;
// import { useState, } from 'react'; // Import useState and useEffect
// import api from './/api/api'; // Import Axios instance
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await api.post('auth/register/', { email, password });
//       navigate('/login'); // Redirect to login after successful registration
//     } catch (error) {
//       setError('Error creating account'); // Provide more specific error messages if possible
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
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
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm Password"
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;