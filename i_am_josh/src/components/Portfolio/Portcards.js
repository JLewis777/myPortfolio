import React, { Component } from "react";
import Data from "../../assets/data/projects.json";
import { getTTFB } from "web-vitals";
import "./Portcards.css";

class Portcards extends Component {
  constructor() {
    super();

    this.state = {
      projects: Data,
    };
  }
  // Im sure I need a method for the buttons to send the user to the project sites...
  render() {
    return (
      <>
        <div className="all-cards">
          {this.state.projects.map((wk, i) => (
            <div key={i} className="card">
              <h1>{wk.title}</h1>
              <img className="images" src={wk.image} />
              <p className="desc">{wk.description}</p>
              <div className="section2">
                <div className="tstack">
                  <p>Technology used:</p>
                  <ul>
                    {wk.stack.map((tk, j) => (
                      <li>{tk}</li>
                    ))}
                  </ul>
                </div>
                <div className="btn">
                  <a href={wk.link} rel="noreferrer" target="_blank">
                    <button className="innerbtn">Check this out!</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Portcards;
