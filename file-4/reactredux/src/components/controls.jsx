import React from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={decrement}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-success btn-lg px-4"
        onClick={increment}
      >
        +1
      </button>
    </div>
  );
}

export default Controls;
