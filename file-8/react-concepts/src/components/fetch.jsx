import React from "react";
import "./complex-nested-json.json";
function Fetch() {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div>
      <h4></h4>
    </div>
  );
}

export default Fetch;
