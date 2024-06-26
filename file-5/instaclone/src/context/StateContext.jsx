import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

// export default StateContext;

export const StateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const value = useMemo(
    () => ({
      posts,
      setPosts,
    }),
    [posts, setPosts]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
