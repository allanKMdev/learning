import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { registerUser, loginUser } from '../api'; // Ensure loginUser is defined correctly in your API module

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Register a new user
    const register = async (email, username, password) => {
        const userData = { email, username, password };
        try {
            const newUser = await registerUser(userData);
            setUser(newUser);  // Set the user state with the new user data
            // Optionally save authentication token in localStorage here
        } catch (error) {
            console.error("Registration failed:", error);
            // Set error state or show error message to the user
        }
    };

    // Login functionality
    const login = async (email, password) => {
        try {
            const loggedInUser = await loginUser({ email, password }); // Ensure loginUser handles API call
            setUser(loggedInUser);
            // Optionally store authentication token in localStorage
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login error (e.g., invalid credentials)
        }
    };

    // Logout functionality
    const logout = () => {
        setUser(null); // Clear the user state
        // Optionally remove authentication token from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Prop validation for AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;