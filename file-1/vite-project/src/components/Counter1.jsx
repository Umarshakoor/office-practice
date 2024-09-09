import React from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickDecrement = () => {
    setCount(count - 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };
  return (
    <div>
      <>
        <div>
          <h1>{count}</h1>
          <button onClick={handleClick}>+</button>
          <button onClick={handleClickDecrement}>-</button>
          <button onClick={handleClickReset}>0</button>
        </div>
      </>
      ); }
    </div>
  );
}

export default Counter1;
