import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Topic from "./components/Topic";

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  );
};

export default Routes;
