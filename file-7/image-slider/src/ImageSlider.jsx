import { useState } from "react";
import car1 from "./assets/car 1.jpg";
import car2 from "./assets/car 2.jpg";
import car3 from "./assets/car 3.jpg";
import car4 from "./assets/car 4.jpg";
import car5 from "./assets/car 5.jpg";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./imageslider.css";

function ImageSlider() {
  const images = [car1, car2, car3, car4, car5];
  const [imgIndex, setImgIndex] = useState(0);
  const showNextImage = () => {
    setImgIndex((index) => {
      console.log("...nextindex", index);
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImage = () => {
    setImgIndex((index) => {
      console.log("...Previndex", index);
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  /*   const examplehandle = (index) => {
    if (index === 0) setImgIndex(images.length - 1);
    else setImgIndex(index - 1);
  }; */
  /* 
  const prev = () =>
    setImgIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1)); */

  /*   const next = () =>
    setImgIndex((curr) => (curr = images.length -1  ? 0 : curr + 1));  */
  return (
    <div className="img-div">
      {/*       <img src={images[imgIndex]} className="image-img" />
      <button onClick={showNextImage}>
        <ArrowBigLeft className="img-slider-left-btn" />
      </button>
      <button onClick={showPrevImage}>
        <ArrowBigRight className="img-slider-right-btn" />
      </button> */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="image-img"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>
      <button onClick={showNextImage}>
        <ArrowBigLeft className="img-slider-left-btn" />
      </button>
      <button onClick={showPrevImage}>
        <ArrowBigRight className="img-slider-right-btn" />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <button
            className="img-slider-dot-btn"
            onClick={() => setImgIndex(index)}
            key={index}
          >
            {index === imgIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
