import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [route, setRoute] = useState("AboutMe");
  console.log(route);
  return (
    <Router>
      <div className="App">
        <NavBar setRoute={setRoute} route={route} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Projects"
            element={
              <div className="cardContainer container">
                <div className="row">
                  <Projects />
                </div>
              </div>
            }
          />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
