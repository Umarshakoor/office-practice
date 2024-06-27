import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

// export default StateContext;

export const StateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const value = useMemo(
    () => ({
      posts,
      setPosts,
      query,
      setQuery,
    }),
    [posts, setPosts, query, setQuery]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
