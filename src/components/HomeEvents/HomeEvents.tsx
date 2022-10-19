import React from "react";
import "./HomeEvents.scss";

const HomeEvents = () => {
  return (
    <div className="home-events-container container">
      <div className="home-events-wrapper wrapper">
        <h2 className="title-36">Our Events</h2>
        <div className="event-card">
          <p className="text-18">Ongoing Event</p>
          <div className="card-content-box">
            <div className="card-call-to-action">
              <h3 className="title-20">Compose Camp Android</h3>
              <div className="cta-buttons" style={{ marginTop: "2rem" }}>
                <button className="btn btn-fill">Join Now/RSVP</button>
                <button className="btn btn-fill">Know More</button>
              </div>
            </div>
            <p className="text-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
        </div>
        <div className="more-events">
          <h2 className="title-20">We Conduct More Events</h2>
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
