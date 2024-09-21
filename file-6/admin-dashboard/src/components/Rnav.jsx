import { useState } from "react";
import "../styles/rnav.css";
import { Link, NavLink } from "react-router-dom";

const Rnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Rnav;
