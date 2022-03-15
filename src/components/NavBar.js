import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const setRoute = props.setRoute;
  const route = props.route;
  function changeRoute(e) {
    setRoute(e.target.name);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button
                className={
                  route === "AboutMe"
                    ? " draw meet nav-link active"
                    : " draw meet nav-link"
                }
                type="submit"
                name="AboutMe"
              >
                <Link name="AboutMe" to={{ pathname: `/` }}>
                  About Me
                </Link>
              </button>
              <button
                className={
                  route === "Projects"
                    ? " draw meet nav-link  active"
                    : " draw meet nav-link"
                }
                type="submit"
                name="Projects"
              >
                <Link name="Projects" to={{ pathname: `/Projects` }}>
                  Projects
                </Link>
              </button>
              <button
                className={
                  route === "Resume"
                    ? " draw meet nav-link  active"
                    : " draw meet nav-link"
                }
                type="submit"
                name="Resume"
              >
                <Link name="Resume" to={{ pathname: `/Resume` }}>
                  Resume
                </Link>
              </button>
              <button
                className={
                  route === "Contact"
                    ? " draw meet nav-link  active"
                    : " draw meet nav-link"
                }
                type="submit"
                name="Contact"
              >
                <Link name="Contact" to={{ pathname: `/Contact` }}>
                  Contact
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
