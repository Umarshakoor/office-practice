import { useState, useMemo } from "react";

const ExpensiveComponent = ({ a, b }) => {
  const computeExpensiveValue = (a, b) => {
    // Simulate an expensive calculation
    console.log("Calculating...");
    return a + b;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div>
      <p>Computed Value: {memoizedValue}</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent a={1} b={2} />
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
