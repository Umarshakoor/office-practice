import { Link } from "react-router-dom";
import { Home, Analytics, Settings } from "@mui/icons-material";

const menuItems = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Analytics", icon: <Analytics />, path: "/analytics" },
  { name: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "expaneded" : "collapsed"}`}>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} className="menu-item">
          {item.icon}
          {isOpen && <span>{item.name}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
