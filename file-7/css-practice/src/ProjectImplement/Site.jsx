import "./site.css";
import Square from "@mui/icons-material/Square";
import logo from "../components/Ninja-Logo-2018.png";

function Site() {
  return (
    <div>
      <div className="header">
        <ul className="header-ul">
          <li className="header-li">
            <Square
              fontSize="small"
              sx={{ color: "#0050ff", marginRight: "7px" }}
            />
            <span className="li-span-name">Harry Smith</span>
            <span className="li-span">/</span>
            <span className="li-span-second">Product Managers</span>
          </li>
        </ul>
      </div>
      <div className="about">
        <div className="item1">
          <div className="image-card">
            <div className="image-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="text">
              <h4 className="text-card">Harry</h4>
              <h4 className="text-card">Smith</h4>
            </div>
          </div>
        </div>
        <div className="item2"></div>
      </div>
    </div>
  );
}

export default Site;
