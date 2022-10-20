import React, { useState, useEffect } from "react";
import "./HomeProjects.scss";

const HomeProjects: React.FC = (props: any) => {
  const [numProjects, setNumProjects]: any = useState(0);
  const [projectObjs, setProjectObjs]: any = useState([]);

  useEffect(() => {
    if (props.projects) {
      setNumProjects(props.projects.length);
      setProjectObjs(props.projects.splice(0, 3));
    }
  }, []);

  return (
    <div className="home-projects-container container">
      <div className="home-projects-wrapper wrapper wrapper-full-width">
        <div className="text-content-box bg-grey-box">
          <h2 className="title-36">GDSC KGEC Projects</h2>
          <div className="count">
            <span className="large-no">{numProjects ? numProjects : 0}</span>
            <span>Projects</span>
          </div>
          <p className="text-18">See our exclusive projects...</p>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button className="btn btn-fill">View more projects</button>
          </div>
        </div>
        <div className="text-content-box bg-green-box">
          <h2 className="title-36">Top 3 Projects</h2>
          {projectObjs ? (
            <div className="home-projects-box">
              {projectObjs.map((project: any) => (
                <div className="home-project-card">
                  <h3 className="text-18">{project.name}</h3>
                  <span></span>
                  <button
                    onClick={() => {
                      window.location.href = project.repoLink;
                    }}
                    className="btn btn-outline btn-outline-green"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
