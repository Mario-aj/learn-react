import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Topics from "./pages/Topics";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact component={About} />
      <Route path="/user" component={User} />
      <Route path="/topics" component={Topics} />
    </Switch>
  );
};

export default Routes;
