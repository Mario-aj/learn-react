import { ReactNode, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { signInRequest } from '../../services';
import { AuthContext, SignInProps } from '../contexts';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useState('');
  const isAuthenticated = !!userId;

  useEffect(() => {
    const { ['auth-token']: token } = parseCookies();
    if (token) Router.push('/home');
  });

  async function signIn({ email, password }: SignInProps) {
    const { token, user } = await signInRequest({ email, password });

    setCookie(undefined, 'auth-token', token, {
      maxAge: 1 * 60 * 1, // 1 min
    });

    setUserId(user._id);
    Router.push('/home');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
