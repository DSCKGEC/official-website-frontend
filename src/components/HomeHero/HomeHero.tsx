import React from "react";
import DSCLogo from "../../assets/dsc-logo.png";
import "./HomeHero.scss";

const HomeHero: React.FC = () => {
  return (
    <div className="hero-container container">
      <div className="hero-wrapper wrapper">
        <div className="hero-text-box">
          <div className="logo-img-div">
            <img src={DSCLogo} alt="" className="logo" />
          </div>
          <div className="text-content">
            <h2>Google Developer Students Club</h2>
            <h4>Kalyani Government Engineering College</h4>
          </div>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button className="btn btn-fill">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
