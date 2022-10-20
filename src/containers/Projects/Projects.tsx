import React from "react";
import "./Projects.scss";
import ComingSoon from "../../components/Coming Soon/ComingSoon";

const Projects: React.FC = () => {
  return (
    <div className="projects-container container">
      <div className="projects-wrapper wrapper">
        <ComingSoon/>        
      </div>
    </div>
  );
};

export default Projects;
