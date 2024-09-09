import { useState, useEffect } from "react";

function WidthHeightMinMax() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <div>
      <div
        className="min-width-div"
        style={{
          height: "200px",
          //   width: "400px",
          backgroundColor: "lightpink",
          //   maxWidth: "500px",
          minWidth: "300px",
        }}
      >
        umar shakoor / xpro code studio live from uk
      </div>
      <div>
        <p>window Width: {width}</p>
        <p>window Height: {height}</p>
      </div>
    </div>
  );
}

export default WidthHeightMinMax;
