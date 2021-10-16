import Router from 'next/router';
import withAuth from '../HOC/withAuth';

type DashboardProps = {
  user: {
    name: string;
    email: string;
  };
};

const Dashboard = ({ user }: DashboardProps) => {
  const onLogOut = () => {
    localStorage.removeItem('accessToken');
    Router.push('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>

      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default withAuth(Dashboard);
