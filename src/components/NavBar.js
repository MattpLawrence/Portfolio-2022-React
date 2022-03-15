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
              <Link name="AboutMe" to={{ pathname: `/` }}>
                <button
                  className={
                    route === "AboutMe"
                      ? " draw meet nav-link active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="AboutMe"
                  onClick={changeRoute}
                >
                  About Me
                </button>
              </Link>
              <Link name="Projects" to={{ pathname: `/Projects` }}>
                <button
                  className={
                    route === "Projects"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Projects"
                  onClick={changeRoute}
                >
                  Projects
                </button>
              </Link>
              <Link name="Resume" to={{ pathname: `/Resume` }}>
                <button
                  className={
                    route === "Resume"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Resume"
                  onClick={changeRoute}
                >
                  Resume
                </button>
              </Link>
              <Link name="Contact" to={{ pathname: `/Contact` }}>
                <button
                  className={
                    route === "Contact"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Contact"
                  onClick={changeRoute}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
