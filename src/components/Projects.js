import React from "react";
import projectList from "../assets/projectList";

function Projects() {
  return projectList.map((proj, i) => (
    <div key={i}>
      <div className="card" style={{ width: "30rem" }}>
        <img
          src={proj.imgSrc}
          className="card-img-top"
          alt={proj.imgAlt}
          href={proj.appHref}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{proj.name}</h5>
          <p className="card-text">{proj.description}</p>
        </div>

        <div className="card-body">
          <a href={proj.gitHref} className="card-link">
            View My Project
          </a>
        </div>
      </div>
    </div>
  ));
}

export default Projects;
