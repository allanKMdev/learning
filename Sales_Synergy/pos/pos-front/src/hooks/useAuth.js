// src/hooks/useAuth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null); // User state
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Check if the user is authenticated
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/user/', {
                    credentials: 'include', // Include cookies for authentication
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Login function
    const login = async (username, password) => {
        setError(null); // Reset error
        const response = await fetch('/api/auth/login/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
        } else {
            const errorData = await response.json();
            setError(errorData.error || 'Login failed');
        }
    };

    // Logout function
    const logout = async () => {
        const response = await fetch('/api/auth/logout/', {
            method: 'POST',
            credentials: 'include',
        });

        if (response.ok) {
            setUser(null); // Clear user state
        }
    };

    // Register function
    const register = async (username, password) => {
        setError(null); // Reset error
        const response = await fetch('/api/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
        } else {
            const errorData = await response.json();
            setError(errorData.error || 'Registration failed');
        }
    };

    return {
        user,
        loading,
        error,
        login,
        logout,
        register,
    };
};

export default useAuth;
