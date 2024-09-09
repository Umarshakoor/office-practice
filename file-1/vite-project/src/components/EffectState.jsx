import { useState, useEffect } from "react";

function WidthHeight() {
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
    document.title = `size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <div>
      <p>window Width: {width}</p>
      <p>window Height: {height}</p>
    </div>
  );
}

export default WidthHeight;
