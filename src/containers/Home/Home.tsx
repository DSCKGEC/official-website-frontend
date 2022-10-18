import React from "react";
import DSCLogo from "../../assets/dsc-logo.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container container">
      <div className="home-wrapper wrapper">
        <div className="hero-text-box">
          <div className="logo-img-div">
            <img src={DSCLogo} alt="" className="logo" />
          </div>
          <div className="text-content">
            <h2>Google Developer Students Club</h2>
            <h4>Kalyani Government Engineering College</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
