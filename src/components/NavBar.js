import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  let location = useLocation();
  let route = location.pathname;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            id="btnToggle"
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
          <div className="titleCenter">
            {/* <h1 className="center">Matt Lawrence</h1> */}
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link name="AboutMe" to={{ pathname: `/` }}>
                <button
                  className={
                    route === "/"
                      ? "draw meet nav-link active"
                      : "draw meet nav-link"
                  }
                  type="submit"
                  name="AboutMe"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  About Me
                </button>
              </Link>
              <Link name="Projects" to={{ pathname: `/Projects` }}>
                <button
                  className={
                    route === "/Projects"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Projects"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  Projects
                </button>
              </Link>
              <Link name="Resume" to={{ pathname: `/Resume` }}>
                <button
                  className={
                    route === "/Resume"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Resume"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                >
                  Resume
                </button>
              </Link>
              <Link name="Contact" to={{ pathname: `/Contact` }}>
                <button
                  className={
                    route === "/Contact"
                      ? " draw meet nav-link  active"
                      : " draw meet nav-link"
                  }
                  type="submit"
                  name="Contact"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
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
