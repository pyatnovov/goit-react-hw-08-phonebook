import { useDispatch, useSelector } from 'react-redux';

import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getRefreshing } from 'redux/auth/selectors';

import { PrivateRoute } from './PrivateRoute/PrivatRoute';
import { CommonRoute } from './CommonRout/CommonRout';
import { refreshUsers } from 'redux/auth/operation';
import { Home } from 'pages/Home';
import Layout from './Layout/layout';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(refreshUsers());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <p>Loaging...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <CommonRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <CommonRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
