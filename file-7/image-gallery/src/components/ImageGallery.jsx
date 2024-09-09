import React from "react";
import "./ImageGallery.css";
import cloth1 from "./cloth1.png";
import cloth2 from "./cloth2.png";
import phone1 from "./phone1.png";
import phone2 from "./phone2.png";
import phone3 from "./phone3.png";
import shoes1 from "./shoes1.png";
import shoes2 from "./shoes2.png";

function ImageGallery() {
  return (
    <>
      <div className="wrapper">
        <img src={cloth1} />
        <img src={cloth2} />
        <img src={phone1} />
        <img src={phone2} />
        <img src={phone3} />
        <img src={shoes1} />
        <img src={shoes2} />
      </div>
    </>
  );
}

export default ImageGallery;
