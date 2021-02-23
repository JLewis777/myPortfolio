import React from "react";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";
import About from "../About/About";
import "./Home.css";

const home = () => (
  <>
    <div className="hero">
      <h1 className="hero-text">
        I <br />
        Am <br />
        Joshua.
      </h1>
    </div>
    <div>
      <About />
    </div>
  </>
);

export default home;
