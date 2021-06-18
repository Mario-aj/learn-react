import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Topics from "./pages/Topics";
import Teste from "./pages/Teste";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/topics" component={Topics} />
      <Route path="/test/:name/:age/:nationality" component={Teste} />
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
