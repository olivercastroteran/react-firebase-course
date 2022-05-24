import { useState } from 'react';
import { useLogin } from '../../hooks';
import styles from './Login.module.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(user.email, user.password);

    // setUser({
    //   email: '',
    //   password: '',
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          required
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={user.password}
          required
        />
      </label>

      <button className="btn" disabled={isPending}>
        {isPending ? 'Loading...' : 'login'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
