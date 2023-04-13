import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

import { UserMenu } from 'components/userMenu/userMenu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts">Contacts</NavLink>
        ) : (
          <div>
            {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
            {!isLoggedIn && <NavLink to="/login">Log In</NavLink>}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
