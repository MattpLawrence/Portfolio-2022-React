import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./";
import "./App.css";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import ContactPage from "./pages/ContactPage";

function App() {
  // const [route, setRoute] = useState("AboutMe");

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
