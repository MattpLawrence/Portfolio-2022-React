import React from "react";
import projectList from "../assets/projectList";

function Projects() {
  return projectList.map((proj, i) => (
    <div key={i}>
      <div className="card col-sm-12 col-md-10 col-xl-8">
        <div className="imgContainer">
          <a href={proj.appHref} target="_blank">
            <img src={proj.imgSrc} className="card-img-top" alt={proj.imgAlt} />
            <div className="viewLabel">View this project live now!</div>
            <div className="techLabel">Made With:</div>
            <div className="techContainer">
              {proj.tech.map((t, i) => {
                return (
                  <div key={i} className="techBadge">
                    {t}
                  </div>
                );
              })}
            </div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{proj.name}</h5>
          <p className="card-text">{proj.description}</p>
        </div>

        <div className="card-body">
          <a href={proj.gitHref} target="_blank">
            <button className="card-link button draw">View On GitHub</button>
          </a>
        </div>
      </div>
    </div>
  ));
}

export default Projects;
