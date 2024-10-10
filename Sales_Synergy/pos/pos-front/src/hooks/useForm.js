// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialFormType = 'register') => {
    const [formType, setFormType] = useState(initialFormType); // 'register' or 'login'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (callback) => async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const data = {
            username,
            password,
            ...(formType === 'register' && { confirm_password: confirmPassword }),
        };

        try {
            await callback(data); // Pass data to the callback function (login or register)
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred. Please try again.');
        }
    };

    return {
        formType,
        username,
        password,
        confirmPassword,
        errorMessage,
        setUsername,
        setPassword,
        setConfirmPassword,
        handleSubmit,
        setFormType,
    };
};

export default useForm;
