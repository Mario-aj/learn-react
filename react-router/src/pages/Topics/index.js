import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Routes from "./routes";

const Topics = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Topics page</h1>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>

        <li>
          <Link to={`${match.url}/props-vs-state`}>Props vs State</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
};

export default Topics;
