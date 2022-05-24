import { useEffect, useState } from 'react';
import { useSignup } from '../../hooks';
import styles from './Signup.module.css';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { signup, isPending, error, cleanup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(user.email, user.password, user.name);

    // setUser({
    //   name: '',
    //   email: '',
    //   password: '',
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    return () => {
      if (isPending) {
        cleanup();
      }
    };
  });

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <label>
        <span>Name:</span>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={user.name}
          required
        />
      </label>

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
        {isPending ? 'Loading...' : 'Signup'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
