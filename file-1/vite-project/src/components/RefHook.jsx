//Accessing DOM elements: useRef can be used to get a reference to a DOM element, which can then be manipulated directly.

import { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default RefHook;

//Preserving values between renders: Since the ref object persists across renders, you can use it to store values that you want to preserve between renders without causing re-renders.

/* const MyComponent = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Update the previous count value on each render
  prevCountRef.current = count;

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
 export default MyComponent; */
