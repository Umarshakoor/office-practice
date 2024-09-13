import React from "react";
import "./SearchFood.css";

function SearchFood() {
  return (
    <div style={{ background: "#FEFAF1" }}>
      <div className="search-food">
        <div className="search-two-button">
          <div className="search-text">
            <h4>Search By Food</h4>
          </div>
          <div className="two-button">
            <div className="buttons">
              <button className="prev-next">^</button>
              <button className="prev-next">^</button>
            </div>
            <div className="view-all">
              <h4>View All</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFood;
