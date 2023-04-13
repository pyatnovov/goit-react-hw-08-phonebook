import { NavLink } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/loginForm';
const LoginPage = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p>
        Зареєструватися :<NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};
export default LoginPage;
