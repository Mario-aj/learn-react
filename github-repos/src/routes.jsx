import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Repository from './pages/Repository';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository/:repositoryId" component={Repository} />
    </Switch>
  );
};

export default Routes;
