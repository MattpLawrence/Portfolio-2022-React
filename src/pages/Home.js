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
      <div className="home purple">
        <h2> I'd Love to hear from you!</h2>
      </div>
      <div className="homeContact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
