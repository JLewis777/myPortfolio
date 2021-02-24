import React from "react";
import Navbar from "../Global/Navbar/Navbar";
import "./About.css";

const about = () => (
  <>
    <div className="border">
      <h1 className="about-me">About Me</h1>
      <p className="about-text">
        My name is Joshua Lewis. I am a multi-talented, expressive, open-minded
        and passionate spirit with a love for learning and becoming a better
        version of myself each day. I was born and raised in Greensboro, NC and
        I am an aspiring full-stack developer, graduate of the rigourus and
        intensive Road to Hire program at Red Ventures in Charlotte, NC and
        professional musician. I have been playing guitar for 10+ years now and
        it is one of my passions. Another passion of mine is technology and
        coding. I love technology. I am always amazed at what you can do and
        achieve with technology which in turn fuels my fascination and thirst
        for knowledge. I don't define myself by the work I've done but rather
        what I plan to do. Skills and expertise can be taught but, my character
        is inherent and I try to make it a point to keep learning and
        challenging myself to be the best that I can be no matter what I decide
        to do. I pursue many different interests, hobbies, learning courses and
        other artistic endeavors. I am a fast learner and able to pick up new
        skills and multitask different projects and roles. My Motto is "Forward
        Momentum". This means to always keep moving forward and to leave
        whatever I touch better than I found it and keep heading towards the
        horizon.
      </p>

      <h1 className="about-me">Skills and Practices</h1>
      <section className="section1">
        <div className="left">
          <h2 className="about-me">User Experience/User Interface</h2>
          <ul className="about-text">
            <li>Wireframing</li>
            <li>User Stories</li>
            <li>User Research and Usability</li>
            <li>Agile Certified</li>
            <li>Design Thinking Statements</li>
          </ul>
        </div>
        <div className="right">
          <h2 className="about-me">Technical/Languages</h2>
          <ul className="about-text">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL/MYSQL</li>
            <li>Version Control/Github</li>
            <li>RESTful APIs</li>
            <li>Content Management Systems</li>
          </ul>
        </div>
      </section>
    </div>
  </>
);

export default about;
