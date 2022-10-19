import React, { useState, useEffect } from "react";
import { getCounts } from "../../api/api";
import "./HomeAbout.scss";

const HomeAbout: React.FC = () => {
  const [countObjs, setCountObjs]:any  = useState({});
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const countObjs = await getCounts();
      console.log(countObjs);

      setCountObjs(countObjs.counts);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="home-about-container container">
      <div className="home-about-wrapper wrapper wrapper-full-width">
        <div className="text-content-box bg-blue-box">
          <h2 className="title-36">About GDSC KGEC</h2>
          <p className="text-16">
            Google collaborates with university students who are passionate
            about growing developer communities. GDSC is an Organisation for
            university students who want to bring about a change through
            technology. We are focused upon building technical and non-technical
            skills, which would help students to build a better community.
          </p>
          <p className="text-18">Let's Learn, Grow and Innovate together.</p>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button className="btn btn-outline btn-outline-white">
              Meet Our Team
            </button>
          </div>
        </div>
        <div className="text-content-box bg-black-box">
          <h2 className="title-36">Our Work Matters</h2>
          {(!loading && countObjs)? (
            <div className="works-box">            
            <div className="work-card text-blue">
              <span>{countObjs.users}</span>
              <span>Core Team Members</span>
            </div>
            <div className="work-card text-green">
              <span>{countObjs.domains}</span>
              <span>Working Domains</span>
            </div>
            <div className="work-card text-yellow">
              <span>{countObjs.projects}</span>
              <span>Projects</span>
            </div>
            <div className="work-card text-red">
              <span>{countObjs.events}</span>
              <span>Events Organised</span>
            </div>
          </div>
          ): null}          
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
