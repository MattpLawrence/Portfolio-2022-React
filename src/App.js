import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [route, setRoute] = useState("/");
  console.log(route);
  return (
    <Router>
      <div className="App">
        <NavBar setRoute={setRoute} route={route} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
