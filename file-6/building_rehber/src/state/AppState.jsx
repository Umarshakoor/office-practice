import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // console.log("AppState...", isCollapsed);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = useMemo(
    () => ({ isCollapsed, setIsCollapsed, handleToggle, toggleTheme, theme }),
    [
      isCollapsed,
      setIsCollapsed,
      theme,
      toggleTheme,
      isSidebarOpen,
      toggleSidebar,
    ]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
