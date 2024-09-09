import React, { useContext } from "react";
import { counterContext } from "./Context.jsx";

function Color() {
  const { color, changeColor } = useContext(counterContext);
  return <h1 onClick={changeColor}>{color}</h1>;
}

export default Color;
