import { useState, createContext } from "react";

export const counterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("green");

  const increment = () => {
    return setCounter(counter + 1);
  };

  const decrement = () => {
    return setCounter(counter - 1);
  };

  const changeColor = () => {
    if (color === "red") {
      setColor("green");
    }
    if (color === "green") {
      setColor("red");
    }
    return setColor(test);
  };

  return (
    <counterContext.Provider
      value={{ counter, increment, decrement, color, changeColor }}
    >
      {children}
    </counterContext.Provider>
  );
};
