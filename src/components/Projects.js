import React from "react";
import projectList from "../assets/projectList";

function Projects() {
  return projectList.map((proj, i) => (
    <div key={i}>
      <div className="card col-sm-12 col-md-10 col-xl-8">
        <a href={proj.appHref} target="_blank">
          <img src={proj.imgSrc} className="card-img-top" alt={proj.imgAlt} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{proj.name}</h5>
          <p className="card-text">{proj.description}</p>
        </div>

        <div className="card-body">
          <button href={proj.gitHref} className="card-link button draw">
            View My Project
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Projects;
