import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/user" exact component={User} />
    </Switch>
  );
};

export default Routes;
