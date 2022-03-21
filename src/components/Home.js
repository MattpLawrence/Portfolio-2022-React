import React from "react";

function Home() {
  return (
    <div className="fullPage">
      <section id="one">
        <div data-position="center">
          <img src="images/meAvatar.jpg" className="imgMain" alt="Profile" />
        </div>
        <div className="container">
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
            biking. I am also passionate about taking care of plants. For the
            last 7+ years I have been growing and taking care of my own little
            bonsai garden. There is nothing I love more than having a problem to
            solve, and help grow something from nothing.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
