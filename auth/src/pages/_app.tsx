import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { AuthProvider } from '../app/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
