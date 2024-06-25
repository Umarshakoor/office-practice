import { useState, createContext } from "react";

export const StateContext = createContext();

// export default StateContext;

export const StateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  return (
    <StateContext.Provider value={{ posts, setPosts }}>
      {children}
    </StateContext.Provider>
  );
};
