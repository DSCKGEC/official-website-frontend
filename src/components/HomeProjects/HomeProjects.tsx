import React from "react";
import "./HomeProjects.scss";

const HomeProjects: React.FC = () => {
  return (
    <div className="home-projects-container container">
      <div className="home-projects-wrapper wrapper wrapper-full-width">
        <div className="text-content-box bg-grey-box">
          <h2 className="title-36">GDSC KGEC Projects</h2>
          <div className="count">
            <span className="large-no">35</span>
            <span>Projects</span>
          </div>
          <p className="text-18">
            See our Exclusive Projects ... write something else
          </p>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button className="btn btn-fill">View Our Projects</button>
          </div>
        </div>
        <div className="text-content-box bg-green-box">
          <h2 className="title-36">Top 3 Projects</h2>
          <div className="home-projects-box">
            <div className="home-project-card">
              <h3 className="text-18">KSOC</h3>
              <span>Web Dev</span>
              <button className="btn btn-outline btn-outline-green">
                View
              </button>
            </div>
            <div className="home-project-card">
              <h3 className="text-18">Parkify</h3>
              <span>Web Dev</span>
              <button className="btn btn-outline btn-outline-green">
                View
              </button>
            </div>
            <div className="home-project-card">
              <h3 className="text-18">Attendly</h3>
              <span>App Dev</span>
              <button className="btn btn-outline btn-outline-green">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
