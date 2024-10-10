// src/PrivateRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth'; // Custom hook for authentication context
import PropTypes from 'prop-types'; // Import PropTypes

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Access authentication status

  return isAuthenticated ? element : <Navigate to="/login" replace />; // Redirect to login if not authenticated
};

// PropTypes validation
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired, // Validate that element is a React element and is required
};

export default PrivateRoute;
