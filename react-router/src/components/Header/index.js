import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => (
  <nav className="container">
    <h1>
      <Link to="/" className="link">
        Home
      </Link>
    </h1>

    <h1>
      <Link to="/about" className="link">
        About
      </Link>
    </h1>

    <h1>
      <Link to="/user" className="link">
        User
      </Link>
    </h1>

    <h1>
      <Link to="/topics" className="link">
        Topics
      </Link>
    </h1>
  </nav>
);

export default Header;
