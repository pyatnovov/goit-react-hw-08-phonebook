import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

import { UserMenu } from 'components/userMenu/userMenu';
import { Container } from './navigation.styled';
import { StyledLink } from './navigation.styled';
const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Container>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn ? (
          <StyledLink to="/contacts">Contacts</StyledLink>
        ) : (
          <Container>
            {!isLoggedIn && <StyledLink to="/register">Register</StyledLink>}
            {!isLoggedIn && <StyledLink to="/login">Log In</StyledLink>}
          </Container>
        )}
      </Container>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
