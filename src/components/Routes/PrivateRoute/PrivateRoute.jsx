import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuthorized, selectToken } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const token = useSelector(selectToken);
  const location = useLocation();
  const locationRef = useRef(location.pathname);

  return isAuthorized ? (
    children
  ) : (
    <Navigate to={token ? locationRef : redirectTo} />
  );
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PrivateRoute;
