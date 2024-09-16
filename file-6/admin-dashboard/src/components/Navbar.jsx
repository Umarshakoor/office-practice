import { useState } from "react";
import { Menu, Search, Facebook, Twitter } from "@mui/icons-material";

const Navbar = ({ toggleSidebar, selectedPage }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Menu onClick={toggleSidebar} />
        <span>{selectedPage}</span>
      </div>
      <div className="navbar-center">
        {isSearchOpen ? (
          <input type="text" placeholder="Search here" />
        ) : (
          <Search onClick={() => setSearchOpen(true)} />
        )}
      </div>
      <div className="navbar-right">
        <Facebook />
        <Twitter />
      </div>
    </nav>
  );
};
export default Navbar;
