import React from "react";
import "./Footer.css";

const footer = () => (
  <footer className="footer">
    <p className="topText">
      Email: Josh.Ericzander@protonmail.com | Last Date Updated: 02/23/21 |
      Designed and Developed by Joshua Lewis
    </p>
    <a
      href="https://linkedin.com/in/joshua-lewis7/"
      aria-label="LinkedIn"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-linkedin fa-2x"></span>
    </a>

    <a
      href="https://github.com/JLewis777"
      aria-label="Github"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-github fa-2x"></span>
    </a>
    <a
      href="https://twitter.com"
      aria-label="Twitter"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-twitter fa-2x"></span>
    </a>
  </footer>
);

export default footer;
