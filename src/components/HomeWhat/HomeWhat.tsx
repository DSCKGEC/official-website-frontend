import React from "react";
import GDSCImg from "../../assets/gdsc-meta-image.png";

const HomeWhat: React.FC = () => {
  return (
    <div className="home-what-container container">
      <div className="home-what-wrapper wrapper wrapper-full-width">
        <div className="text-content-box bg-blue-box">
          <h2 className="title-36">
            What is <br />
            Google Developer Student Clubs?
          </h2>
          <p className="text-16">
            Google collaborates with university students who are passionate
            about growing developer communities. GDSC is an organisation for
            university students who want to bring about a change through
            technology. We are focused upon building technical and non-technical
            skills, which would help students to build a better community.
          </p>
          <div className="cta-single-button" style={{ marginTop: "3rem" }}>
            <button className="btn btn-outline btn-outline-blue">
              Know More
            </button>
          </div>
        </div>
        <div className="right-con">
          <div className="container-img">
            <img src={GDSCImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhat;
