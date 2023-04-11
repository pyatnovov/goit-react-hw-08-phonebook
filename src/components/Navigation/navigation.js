import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import UserMenu from 'components/userMenu/UserMenu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
