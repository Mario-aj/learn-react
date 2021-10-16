import type { NextPage } from 'next';
import { SyntheticEvent, useCallback } from 'react';
import { useAuth } from '../app/hooks';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { signIn } = useAuth();
  const onSubmit = useCallback((event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [email, password] = event.currentTarget.elements;

    signIn({ email: email.value, password: password.value });
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email-field">email</label>
          <input type="text" name="email" id="email-field" />
        </div>
        <div>
          <label htmlFor="password-field">password</label>
          <input type="password" name="password" id="password-field" />
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Home;
