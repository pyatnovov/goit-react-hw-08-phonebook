import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { getUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <h2>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </h2>
  );
};
