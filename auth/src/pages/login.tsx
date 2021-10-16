import { NextPage } from 'next';
import Router from 'next/router';

const Login: NextPage = () => {
  const onLogin = () => {
    localStorage.setItem(
      'accessToken',
      'jhdsjkak.dashjhas.mario-aj.dasg.dasdd'
    );
    Router.push('/');
  };
  return (
    <button type="button" onClick={onLogin}>
      Log in
    </button>
  );
};

export default Login;
