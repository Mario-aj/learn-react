import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => (props) => {
  if (typeof window !== 'undefined') {
    const router = useRouter();

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.replace('/login');
      return null;
    }
    const user = {
      name: 'Mario-aj',
      email: 'jmario@seasoned.cc',
    };

    return <WrappedComponent {...props} user={user} />;
  }

  return null;
};

export default withAuth;
