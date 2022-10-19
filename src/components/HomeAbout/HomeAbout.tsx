import React, { useState, useEffect } from "react";
import { getCounts } from "../../api/api";
import "./HomeAbout.scss";

const HomeAbout: React.FC = () => {
  const [countObjs, setCountObjs]: any = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const countObjs = await getCounts();
      console.log(countObjs);

      setCountObjs(countObjs.counts);
      setLoading(false);
    })();
  }, []);

  function animateValue(id:any, newValue:any, duration:any) {
    let obj:any = document.getElementById(id);
    let range = newValue;
    let minTime = 50;
    let stepTime = Math.max(Math.abs(Math.floor(duration/range)), minTime);
    
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer:any;
    function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(newValue - (remaining * range));      
      obj.innerHTML = value;
      if(value === newValue) {
        clearInterval(timer);
      }
    }
    timer = setInterval(run, stepTime);
    run();
  }

  function animateAll(values:any, duration:any) {
    let ids:any = ['count_users', 'count_domains', 'count_events', 'count_projects'];
    let v:any = [values.users, values.domains, values.events, values.projects];
    for(let i = 0; i < ids.length; i++) {
      animateValue(ids[i], v[i], duration);
    }
  }

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
        {(!loading && countObjs) ? (
          <div className="text-content-box bg-black-box" onMouseEnter={()=>animateAll(countObjs, 2000)}>
            <h2 className="title-36">Our Work Matters</h2>          
              <div className="works-box">
                <div className="work-card text-blue">
                  <span id="count_users">0</span>                
                  <span>Core Team Members</span>
                </div>
                <div className="work-card text-green">
                  <span id="count_domains">0</span>
                  <span>Working Domains</span>
                </div>
                <div className="work-card text-yellow">
                  <span id="count_projects">0</span>
                  <span>Projects</span>
                </div>
                <div className="work-card text-red">
                  <span id="count_events">0</span>
                  <span>Events Organised</span>
                </div>
              </div>          
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeAbout;
