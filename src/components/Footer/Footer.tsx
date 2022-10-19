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
                <h4 className="title-26">Google Developer Student Clubs</h4>
                <h5 className="title-20">
                  Kalyani Government Engineering College
                </h5>
                <p className="text-18">
                  One of the most prestigious and successful club in our college
                </p>
                <p className="text-18">Learning in Community</p>
                <div className="follow">
                  <h4>dsckgec@gmail.com</h4>
                  <h4>Kalyani, Nadia, West Bengal, Pin - 741235</h4>
                  <div className="icons">
                    <a href="https://www.facebook.com/dsckgec" target="__blank">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/dsckgec/" target="__blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/dsckgec" target="__blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/c/DeveloperStudentClubKGEC" target="__blank">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/dsckgec/" target="__blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-two">
            <div className="col-btn">
              <div className="cta-single-button">
                <button onClick={()=>{window.location.href='https://discord.gg/VNfMU2yffd'}} className="btn btn-fill">Join Our Community</button>
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
          <p className="p1">Designed and Developed by GDSC-KGEC</p>
          <p className="p2">Copyright © 2022 GDSC-KGEC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
