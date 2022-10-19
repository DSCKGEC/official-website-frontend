import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DSCLogo from "../../assets/dsc-logo.png";
import "./Sidebar.scss";

const Sidebar: React.FC<IContentMovedProps> = ({
  contentMoved,
  setContentMoved,
}) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  console.log(location.pathname);
  return (
    <div className={!sidebarOpen ? "sidebar opened" : "sidebar closed"}>
      <div className="top-bar">
        {/* <h2 className="logo none-text">GDSC-KGEC</h2> */}
        <div
          className={
            !sidebarOpen ? "menu-toggle menu-toggle-light" : "menu-toggle"
          }
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <span className="menu-toggle-bar one"></span>
          <span className="menu-toggle-bar two"></span>
          <span className="menu-toggle-bar three"></span>
        </div>
      </div>
      <nav className="nav-container">
        <div className="title-text">
          <div className="logo-img-div">
            <img src={DSCLogo} alt="" className="logo" />
          </div>
          <div className="logo-text-content">
            <span>Google Developer Student Clubs</span>
            <span>Kalyani Government Engineering College</span>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              style={{ color: location.pathname === "/" ? "$blue" : "$dark" }}
              onClick={() => setSidebarOpen(true)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: location.pathname === "/about" ? "$blue" : "$dark",
              }}
              onClick={() => setSidebarOpen(true)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              style={{
                color: location.pathname === "/blogs" ? "$blue" : "$dark",
              }}
              onClick={() => setSidebarOpen(true)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{
                color: location.pathname === "/projects" ? "$blue" : "$dark",
              }}
              onClick={() => setSidebarOpen(true)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              style={{
                color: location.pathname === "/events" ? "$blue" : "$dark",
              }}
              onClick={() => setSidebarOpen(true)}
            >
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
