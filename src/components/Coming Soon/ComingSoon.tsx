import React from "react";
import DSCLogo from "../../assets/dsc-logo.png";
import "./ComingSoon.scss";

const ComingSoon: React.FC = () => {
  return (
    <div className="id">
      <div className="coming-soon"></div>
      <div id="container">
        <img src={DSCLogo} id="avatar" width="50" draggable="false" />

        <div id="text">
          <h1>Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
