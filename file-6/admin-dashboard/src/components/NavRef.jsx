import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navref.css";

const NavRef = () => {
  const barRef = useRef();

  const showNavbar = () => {
    barRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header>
        <h3>LEGO</h3>
        <nav ref={barRef}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default NavRef;
