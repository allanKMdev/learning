
// // import {
// //     FormControl,
// //     FormLabel,
// //     Button,
// //     VStack,
// //     Input,
// //     Text,
// //   } from '@chakra-ui/react'

// // import { useState } from 'react';
// // import { useAuth } from '../context/useAuth';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {

// //     const [username, setUsername] = useState('')
// //     const [password, setPassword] = useState('')

// //     const { loginUser } = useAuth();
// //     const nav = useNavigate();

// //     const handleLogin = async () => {
// //         await loginUser(username, password)
// //     }

// //     const handleNavigate = () => {
// //         nav('/register')
// //     }

// //     return (
// //         <VStack minH='500px' w='70%' maxW='400px' justifyContent='start' alignItems='start'>
// //             <Text mb='20px' color='gray.700' fontSize='44px' fontWeight='bold'>Login</Text>
// //             <FormControl mb='20px'>
// //                 <FormLabel>Username</FormLabel>
// //                 <Input bg='white' onChange={(e) => setUsername(e.target.value)} value={username} type='email' placeholder='Your username here' />
// //             </FormControl>
// //             <FormControl>
// //                 <FormLabel>Password</FormLabel>
// //                 <Input  bg='white' onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Your password here' />
// //             </FormControl>
// //             <Button mb='10px' colorScheme='green' mt='20px' w='100%' onClick={handleLogin}>Login</Button>
// //             <Text onClick={handleNavigate} cursor='pointer' color='gray.600' fontSize='14px'>Dont have an account? Sign up</Text>
// //         </VStack>
// //     )
// // }

// // export default Login;


// import  { useState } from 'react';
// import api from '../api/api'; // Import the Axios instance
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await api.post('auth/login/', { email, password });
//             localStorage.setItem('token', response.data.token);  // Store JWT token
//             navigate('/');  // Redirect to dashboard/home
//         } catch (error) {
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>
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
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
