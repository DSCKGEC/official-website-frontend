import React, { useState, useEffect } from "react";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeEvents from "../../components/HomeEvents/HomeEvents";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import HomeRead from "../../components/HomeRead/HomeRead";
import HomeWhat from "../../components/HomeWhat/HomeWhat";
import "./Home.scss";
import { getCounts, allEvents, allProjects } from "../../api/api";
import Loader from "../../components/Loader/Loader";

const Home: React.FC = () => {
  const [props, setProps]: any = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const countObjs = await getCounts();
      const eventObjs = await allEvents();
      const projectObjs = await allProjects();

      setProps({
        counts: countObjs.counts,
        events: eventObjs.events,
        projects: projectObjs.projects,
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
  }, []);

  return loading ? (
    <div className="loading">
      <Loader />
    </div>
  ) : (
    <div className="home-page page">
      <HomeHero />
      <HomeWhat />
      <HomeAbout {...props} />
      <HomeRead />
      <HomeProjects {...props} />
      <HomeEvents {...props} />
    </div>
  );
};

export default Home;
