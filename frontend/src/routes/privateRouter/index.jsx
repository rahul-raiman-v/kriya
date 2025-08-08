import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

export const PrivateRouter = ({ children, user }) => {
  if (!user) return <Navigate to="/login" />;

  return <div>{children}</div>;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
};
