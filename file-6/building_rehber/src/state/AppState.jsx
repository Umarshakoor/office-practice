import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log("AppState...", isCollapsed);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = useMemo(
    () => ({ isCollapsed, setIsCollapsed, handleToggle }),
    [isCollapsed, setIsCollapsed]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
