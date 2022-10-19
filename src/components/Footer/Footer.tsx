import React from "react";
import { Link } from "react-router-dom";
import DSCLogo from "../../assets/dsc-logo.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-container container">
      <div className="footer-wrapper wrapper">
        <div className="footer-content">
          <div className="col col-one">
            <div className="col-container">
              <div className="col-img">
                <img src={DSCLogo} alt="" />
              </div>
              <div className="col-text">
                <h4 className="title-26">Google Developer Students Club</h4>
                <h5 className="title-20">
                  Kalyani Government Engineering College
                </h5>
                <p className="text-18">
                  One of the most prestigious and sucessful club in our college
                </p>
                <p className="text-18">Learning in Community</p>
                <div className="follow">
                  <h4>dsckgec@gmail.com</h4>
                  <h4>Kalyani, Nadia, West Bengal, Pin - 741235</h4>
                  <div className="icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-two">
            <div className="col-btn">
              <div className="cta-single-button">
                <button className="btn btn-fill">Join Our Community</button>
              </div>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p className="p1">Designed and Developed by GDSC KGEC</p>
          <p className="p2">@copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
