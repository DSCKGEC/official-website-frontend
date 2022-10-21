import React, { useEffect } from "react";
import "./About.scss";
import ComingSoon from "../../components/Coming Soon/ComingSoon";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="about-page page">
      <ComingSoon />
    </div>
  );
};

export default About;
