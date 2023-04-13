import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRefreshing, getIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getRefreshing);

  const redirected = !isLoggedIn && !isRefreshing;

  return redirected ? <Navigate to={redirectTo} /> : Component;
};
