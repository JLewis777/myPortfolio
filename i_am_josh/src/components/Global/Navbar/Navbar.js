import React from "react";
import "./Navbar.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const navbar = () => (
  <header>
    <nav>
      <div className="listItems">
        <ul>
          <li className="navItem">
            <Link to="/">About Me</Link>
          </li>
          <li className="navItem">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="navItem">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
