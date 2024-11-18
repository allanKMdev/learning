
// import  { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const ProtectedRoute = () => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
// components/ProtectedRoute.js
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAccessToken } from '../services/authService';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAccessToken() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

// PropTypes validation
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;