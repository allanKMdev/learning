// import  { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/register/', { username, email, password });
//       console.log(response.data);
//       // Handle successful registration (e.g., redirect to login or dashboard)
//     } catch (error) {
//       console.error(error.response.data);
//       // Handle error (e.g., show message to user)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
