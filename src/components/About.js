import React from "react";

function About() {
  return (
    <div>
      <section id="one">
        <header className="intro">
          <h2>Developer, Problem Solver & Perpetual Learner </h2>
          <p>
            I design solutions everyday,
            <br />
            and I love doing so.
          </p>
        </header>
        <div data-position="center">
          <img
            src="images/meAvatar.jpg"
            className="imgMain imgAbout"
            alt="Profile"
          />
        </div>

        <img className="svg" src="images/circuit.svg"></img>
        <div className=" purple">
          <header className="major">
            <h2>About Me</h2>
            <p>
              I am a Jr. MERN full stack developer.
              <br />
              Here are a few things you should know about me.
            </p>
          </header>
          <p>
            I was born and raised in Atlanta Georgia, and currently live in
            Marietta. I am branching out into software development and am eager
            to keep learning and creating. When I am not behind the computer I
            enjoy being outdoors. When the weather is nice (not an Atlanta
            summer) you can find me spending my free time hiking and mountain
            biking. I am also passionate about taking care of plants. There is
            nothing I love more than having a problem to solve, and help grow
            something from nothing.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
