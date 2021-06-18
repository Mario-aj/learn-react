import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Topics from "./pages/Topics";
import Teste from "./pages/Teste";

import { authenticated } from "./utils/atuh";

const PriveteRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated() ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <PriveteRoute path="/about" component={About} />
      <PriveteRoute path="/user" component={User} />
      <PriveteRoute path="/topics" component={Topics} />
      <Route path="/test/:name/:age/:nationality" component={Teste} />
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
