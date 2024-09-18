import React, { useState } from "react";
import "./ResNav.css";
import { FaHome, FaInfoCircle, FaPhone, FaSearch } from "react-icons/fa";

const ResNav = () => {
  const [isManuOpen, setIsManuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsManuOpen(!isManuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">MyLogo</div>

          <div className={`nav-items ${isManuOpen} ? 'active' : ''`}>
            <ul>
              <li>
                <a href="#">
                  <FaHome />
                </a>
                Home
              </li>
              <li>
                <a href="#">
                  <FaInfoCircle />
                </a>
                About
              </li>
              <li>
                <a href="#">
                  <FaPhone />
                </a>
                contact us
              </li>
            </ul>
          </div>

          <div className="search-container">
            <input
              type="text"
              name=""
              id=""
              className={`search-input ${isSearchOpen}? 'active': ''`}
              placeholder="Search"
            />
            <FaSearch className="search-icon" onClick={toggleSearch} />
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default ResNav;
