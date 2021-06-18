import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const NotFound = () => {
  return (
    <div className="container-not-found">
      <h1>404 | page was not found</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
