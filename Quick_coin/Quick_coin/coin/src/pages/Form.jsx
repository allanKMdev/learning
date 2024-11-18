// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


// function Form({ route, method }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const name = method === "login" ? "Login" : "Register";

//     const handleSubmit = async (e) => {
//         setLoading(true);
//         e.preventDefault();

//         try {
//             const res = await fetch(route,{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }, 
//                 body: JSON.stringify({username, password}),
//             });
//             if (!res.ok) {
//                 throw new Error('Nerwork response was not okay');
//             }
//             const data = await res.json();

//             if (method === "login") {
//                 localStorage.setItem(ACCESS_TOKEN, data.access);
//                 localStorage.setItem(REFRESH_TOKEN, data.refresh);
//                 navigate("/");
//             } else {
//                 navigate("/login");
//             }
//         } catch (error) {
//             alert(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-36"
//         >
//             <h1 className="text-2xl font-bold mb-6 text-center">{name}</h1>
//             <input
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" type="text"
//                 value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
//             <input
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" type="password"
//                 value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
//             <p className="p-8 font-semibold">Not Registered <span className="text-blue-500"><Link to='/register'>Register</Link></span></p>
//             <button
//                 className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
//                 type="submit"
//             >
//                 {name}
//             </button>
//         </form>
//     );
// }

// export default Form;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

// function Form({ route, method }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const isLogin = method === "login";
//     const buttonText = isLogin ? "Login" : "Register";

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const res = await fetch(route, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (!res.ok) {
//                 throw new Error('Network response was not okay');
//             }

//             const data = await res.json();

//             if (isLogin) {
//                 localStorage.setItem(ACCESS_TOKEN, data.access);
//                 localStorage.setItem(REFRESH_TOKEN, data.refresh);
//                 navigate("/");
//             } else {
//                 // For registration, redirect to the login page after successful registration
//                 alert("Registration successful. Please log in.");
//                 navigate("/login");
//             }
//         } catch (error) {
//             alert(`Error: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-36"
//         >
//             <h1 className="text-2xl font-bold mb-6 text-center">{buttonText}</h1>
//             <input
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//             />
//             <input
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//             />
//             {!isLogin && (
//                 <p className="text-sm text-gray-600 text-center">
//                     Already registered? <Link to='/login' className="text-blue-500">Login here</Link>
//                 </p>
//             )}
//             <button
//                 className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
//                 type="submit"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : buttonText}
//             </button>
//             {isLogin && (
//                 <p className="text-sm text-gray-600 text-center mt-4">
//                     Not registered? <Link to='/register' className="text-blue-500">Register here</Link>
//                 </p>
//             )}
//         </form>
//     );
// }

// Form.propTypes = {
//     route: PropTypes.string.isRequired,
//     method: PropTypes.oneOf(["login", "register"]).isRequired,
// };

// export default Form;
