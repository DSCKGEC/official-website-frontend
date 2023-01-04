import React from "react";

const HomeRead = () => {
  return (
    <div className="home-read-container container">
      <div className="home-read-wrapper wrapper wrapper-full-width">
        <div className="text-content-box">
          <h2 className="title-36">Read Our Blogs</h2>
          <p className="text-16">
            Blog description , like blog types and all. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic
          </p>
          <div className="cta-single-button" style={{ marginTop: "3rem" }}>
            <button className="btn btn-fill">View our Blogs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRead;
