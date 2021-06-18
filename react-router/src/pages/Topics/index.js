import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Routes from "./routes";

const Topics = () => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <h1>Topics page</h1>

      <ul>
        <li>
          <button
            type="button"
            onClick={() => history.push(`${match.url}/components`)}
            style={{
              cursor: "pointer",
              padding: 8,
              margin: 4,
              color: "#2a2a2a",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Components
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => history.push(`${match.url}/props-vs-state`)}
            style={{
              cursor: "pointer",
              padding: 8,
              margin: 4,
              color: "#2a2a2a",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Props vs State
          </button>
        </li>
      </ul>
      <Routes />
    </div>
  );
};

export default Topics;
