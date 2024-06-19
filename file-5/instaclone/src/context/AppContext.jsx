/* import react, { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <AppContext.Provider value={{ posts, addPost }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext; */
