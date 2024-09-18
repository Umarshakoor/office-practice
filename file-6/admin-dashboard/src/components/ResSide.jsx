import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResSide.css";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    console.log("Collapsing:", !isCollapsed); // Log the state toggle
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? ">" : "<"}
      </button>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle />
            <span className="link-text">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaPhone />
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
