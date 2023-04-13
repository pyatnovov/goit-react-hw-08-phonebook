import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selectors';

export const CommonRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoading);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
