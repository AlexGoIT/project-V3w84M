import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

const PublicRoute = ({ redirectTo, restricted = false, children }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized && restricted ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  restricted: PropTypes.bool,
  children: PropTypes.node,
};

export default PublicRoute;
