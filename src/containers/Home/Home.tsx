import React from "react";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeEvents from "../../components/HomeEvents/HomeEvents";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import HomeRead from "../../components/HomeRead/HomeRead";
import HomeWhat from "../../components/HomeWhat/HomeWhat";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page page">
      <HomeHero />
      <HomeWhat />
      <HomeAbout />
      <HomeRead />
      <HomeProjects />
      <HomeEvents />
    </div>
  );
};

export default Home;
