import "./header.css";
import burgerlogo from "../../assets/burgerlogo.svg";
import spaghetti from "../../assets/spaghettihero.svg";
import {
  LocationOn,
  Person,
  Search,
  ShoppingBag,
  TwoWheeler,
} from "@mui/icons-material";
function Header() {
  return (
    <div className="App-header">
      <div className="header-top-bar">
        <div className="header-logo-text">
          <img className="burgerlogo" src={burgerlogo} alt="Burger Logo" />
          <h4 className="burgerlogo-text">
            XPro<span className="burgerlogo-text-span">burger</span>
          </h4>
        </div>
        <div className="address-search">
          <div className="address">
            <h2 className="address-to">
              Deliver to:
              <LocationOn
                sx={{ fontSize: "large", mx: "3px" }}
                className="location-icon"
              />
              <span className="current-location">Current location</span>
              <span className="address-in">block 5 Township, Lahore</span>
            </h2>
          </div>
          <div className="search-login">
            <Search
              sx={{ fontSize: "large", stroke: "#ffb30e", strokeWidth: 1 }}
              className="search-icon"
            />
            <input
              className="search-input"
              placeholder="Search Food"
              type="text"
            />
            <button className="login-button">
              <Person fontSize="small" />
              LogIn
            </button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="starving-card">
          <h2 className="starving-main-text">Are you starving?</h2>
          <h2 className="starving-below-text">
            Within a few clicks, find meals that are accessible near you
          </h2>
          <div className="starving-card-div">
            <div className="card-button-div">
              <button className="twowheeler delivery">
                <TwoWheeler sx={{ color: "#f17228", fontSize: "large" }} />{" "}
                Delivery
              </button>
              <button className="shoppingbag pickup">
                <ShoppingBag sx={{ fontSize: "medium" }} /> Pickup
              </button>
            </div>
            <div className="starving-card-divider"></div>
            <div className="card-search-button">
              <div className="icon-search">
                <LocationOn sx={{ fontSize: "medium", color: "#ff7474" }} />
                <input
                  className="card-input"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>
              <button className="find-food-button">
                <Search sx={{ fontSize: "medium" }} />
                Find Food
              </button>
            </div>
          </div>
        </div>
        <div className="spaghetti-image">
          <img className="spaghetti-img" src={spaghetti} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
