import React from "react";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";
import Portcards from "../Portfolio/Portcards";
import "./Portfolio.css";

const portfolio = () => (
  <>
    <div className="container">
      {/* <Navbar /> */}
      <h1 className="port-text">My Projects</h1>
      <h2 className="port-text">
        This list features 10 projects that I've worked on over the past 6
        months.
      </h2>
      <Portcards />
      {/* <Footer /> */}
    </div>
  </>
);

export default portfolio;
