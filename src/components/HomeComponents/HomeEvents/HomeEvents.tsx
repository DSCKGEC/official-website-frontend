import React, { useState, useEffect } from "react";
import EventCard from "../../EventComponents/EventCard/EventCard";
import "./HomeEvents.scss";

const HomeEvents = (props: any) => {
  const [eventObjs, setEventObjs]: any = useState([]);

  useEffect(() => {
    if (props.events) {
      setEventObjs(props.events.slice(0, 2));
    }
  }, [props.events]);

  return (
    <div className="home-events-container container">
      <div className="home-events-wrapper wrapper">
        <h2 className="title-36">Our Events</h2>
        {eventObjs
          ? eventObjs.map((event: any, index: number) => (
              <div key={index}>
                <EventCard event={event} />
                <br />
                <br />
              </div>
            ))
          : null}
        <div className="more-events">
          <h2 className="title-20">And many more...</h2>
          <div className="cta-single-button" style={{ marginTop: "2rem" }}>
            <button className="btn btn-outline btn-outline-blue">
              See Other Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEvents;
