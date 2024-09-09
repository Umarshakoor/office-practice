import React, { useContext } from "react";
import { counterContext } from "./Context.jsx";
function Counter() {
  const { counter, increment, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>Counter App</h1>
      <div className="count-wrapper">
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
