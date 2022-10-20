import React, { useState, useEffect } from "react";
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
          ? eventObjs.map((event: any) => (
              <>
                <div className="event-card">
                  <p className="text-18">
                    {new Date(event.date) > new Date() ? "Upcoming" : "Past"}{" "}
                    Event
                  </p>
                  <div className="card-content-box">
                    <div className="card-call-to-action">
                      <h3 className="title-20">{event.title}</h3>
                      <div
                        className="cta-buttons"
                        style={{ marginTop: "2rem" }}
                      >
                        <button
                          onClick={() => {
                            window.location.href = event.gdscPlatformLink;
                          }}
                          className="btn btn-fill"
                        >
                          Join Now/RSVP
                        </button>
                        <button className="btn btn-fill">Know More</button>
                      </div>
                    </div>
                    <p className="text-16">{event.longDescription}</p>
                  </div>
                </div>
                <br />
                <br />
              </>
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
