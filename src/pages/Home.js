import React from "react";

import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <About />
      <div className=" cardContainer container projCardContainer">
        <div className="row">
          <Projects />
        </div>
      </div>
      {/* <img className="svg" src="images/circuit.svg"></img> */}
      <div className="home purple">
        <h2> I'd Love to hear from you!</h2>
        <p>Contact me below:</p>
      </div>
      <img className="svg matrix" src="images/matrix.svg"></img>
      <div className="homeContact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
