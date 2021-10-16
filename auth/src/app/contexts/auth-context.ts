import { createContext } from 'react';

export type SignInProps = {
  email: string;
  password: string;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  userId: string;
  signIn: (data: SignInProps) => void;
};

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  userId: '',
  signIn: () => {},
});

export default AuthContext;
