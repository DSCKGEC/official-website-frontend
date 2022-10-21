import React from "react";
import DSCLogo from "../../assets/dsc-logo.png";
import BgCardHero from "../../assets/bg-card.png";
// import RedRectangle from "../../assets/rectangle-87.png";
// import RedCircle from "../../assets/red-circle.png";
// import RedTriangle from "../../assets/red-triangle.png";
// import BlueTriangle from "../../assets/blue-triangle.png";
// import YellowCircle from "../../assets/yellow-circle.png";
// import RedPlus from "../../assets/red-plus.png";
// import BlueRectangle from "../../assets/group-34.png";
// import FourColors from "../../assets/four-colors.png";
// import GreySquare from "../../assets/gray-square.png";
// import BlueSquare from "../../assets/blue-square.png";
// import OrangeCross from "../../assets/orange-cross.png";
// import LargeCircle from "../../assets/large-circle.png";
import "./HomeHero.scss";

const HomeHero: React.FC = () => {
  return (
    <div className="hero-container container">
      <div className="hero-wrapper wrapper">
        <div className="hero-text-box">
          {/* <img src={BgCardHero} alt="" className="card-bg-box" /> */}
          <div className="logo-img-div">
            <img src={DSCLogo} alt="" className="logo" />
          </div>
          <div className="text-content">
            <h2>Google Developer Student Clubs</h2>
            <h4>Kalyani Government Engineering College</h4>
          </div>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button
              onClick={() => window.scroll({ top: 1500, behavior: "smooth" })}
              className="btn btn-fill"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      {/* <img src={RedRectangle} className="RedRectangle" alt="" />
      <img src={RedCircle} className="RedCircle" alt="" />
      <img src={RedTriangle} className="RedTriangle" alt="" />
      <img src={BlueTriangle} className="BlueTriangle" alt="" />
      <img src={YellowCircle} className="YellowCircle" alt="" />
      <img src={RedPlus} className="RedPlus" alt="" />
      <img src={BlueRectangle} className="BlueRectangle" alt="" />
      <img src={FourColors} className="FourColors" alt="" />
      <img src={GreySquare} className="GreySquareLeft" alt="" />
      <img src={GreySquare} className="GreySquareRight" alt="" />
      <img src={BlueSquare} className="BlueSquare" alt="" />
      <img src={OrangeCross} className="OrangeCross" alt="" />
      <img src={LargeCircle} className="LargeCircle" alt="" /> */}
    </div>
  );
};

export default HomeHero;
