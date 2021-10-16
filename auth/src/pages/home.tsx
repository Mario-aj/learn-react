import type { NextPage } from 'next';
import { parseCookies } from 'nookies';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>authenticated now</div>
    </div>
  );
};

export const getServerSideProps = (ctx: any) => {
  const { ['auht-token']: token } = parseCookies(ctx);

  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {};
};

export default Home;
