import React, { useEffect } from "react";
import "./Events.scss";
import ComingSoon from "../../components/Coming Soon/ComingSoon";

const Events: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="events-page page">
      <ComingSoon />
    </div>
  );
};

export default Events;
