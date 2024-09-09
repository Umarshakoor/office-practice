// import UseEffectHook from "./components/UseEffectHook";
// import SwitchTabs from "./components/UseTransition";

// function App() {
//   return (
//     <>
//       <UseEffectHook />
//     </>
//   );
// }

// export default App;

import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./components/Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
