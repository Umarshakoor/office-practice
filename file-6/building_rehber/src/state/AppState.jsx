import { useState, createContext, useMemo } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const value = useMemo(
    () => ({ mobileOpen, setMobileOpen, handleDrawerToggle }),
    [mobileOpen, setMobileOpen]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
