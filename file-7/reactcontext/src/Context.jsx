/* eslint-disable */
import { createContext, useMemo } from "react";
import { useState } from "react";

export const StateContext = createContext({
  offset: 1,
  setOffSet: () => {},
  limit: 20,
});

export const StateProvider = ({ children }) => {
  const [offset, setOffSet] = useState(1);
  const limit = 20;
  const value = useMemo(
    () => ({
      offset,
      setOffSet,
      limit,
    }),
    [offset, setOffSet]
  );
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
