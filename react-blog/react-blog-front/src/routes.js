import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import api from './services/api';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const auth = api.authenticated();
  return (
    <Route
      {...rest}
      render={props => {
        return auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoutes path="/dashboard" component={Dashboard} />
      <PrivateRoutes exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
