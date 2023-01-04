import React, { useState, useEffect } from "react";
import HomeAbout from "../../components/HomeComponents/HomeAbout/HomeAbout";
import HomeEvents from "../../components/HomeComponents/HomeEvents/HomeEvents";
import HomeHero from "../../components/HomeComponents/HomeHero/HomeHero";
import HomeProjects from "../../components/HomeComponents/HomeProjects/HomeProjects";
import HomeRead from "../../components/HomeComponents/HomeRead/HomeRead";
import HomeWhat from "../../components/HomeComponents/HomeWhat/HomeWhat";
import "./Home.scss";
import { getCounts, allEvents, allProjects } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import FadeIn from "react-fade-in";
// import AOS from "aos";
const AOS = require("aos");

const Home: React.FC = () => {
  const [props, setProps]: any = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const countObjs = await getCounts();
      const eventObjs = await allEvents();
      const projectObjs = await allProjects();

      console.log(projectObjs);

      setProps({
        counts: countObjs.counts,
        events: eventObjs.events,
        projects: projectObjs.projects,
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="home-page page">
      {/* <FadeIn transitionDuration={800}> */}
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeHero />
      </div>
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeWhat />
      </div>
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeAbout {...props} />
      </div>
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeRead />
      </div>
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeProjects {...props} />
      </div>
      <div data-aos="fade-up" data-aos-duration={1200} data-aos-once={true}>
        <HomeEvents {...props} />
      </div>
      {/* </FadeIn> */}
    </div>
  );
};

export default Home;
