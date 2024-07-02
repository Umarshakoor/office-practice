import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  console.log("context", comments);

  const value = useMemo(
    () => ({
      posts,
      setPosts,
      comments,
      setComments,
      suggestions,
      setSuggestions,
      query,
      setQuery,
    }),
    [
      posts,
      setPosts,
      comments,
      setComments,
      suggestions,
      setSuggestions,
      query,
      setQuery,
    ]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
