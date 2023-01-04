import React from "react";
import "./EventCard.scss";

const EventCard: React.FC<any> = ({ event }) => {
  return (
    <div className="event-card">
      <p className="text-18">
        {new Date(event.date) > new Date() ? "Upcoming" : "Past"} Event
      </p>
      <div className="card-content-box">
        <div className="card-call-to-action">
          <div className="event-main-details">
            <img src={event.imageUrl} alt="" className="event-image" />
            <h3 className="title-20">{event.title}</h3>
          </div>
          <div className="cta-buttons" style={{ marginTop: "2rem" }}>
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
  );
};

export default EventCard;
