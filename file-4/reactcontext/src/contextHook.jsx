import { useContext } from "react";
import { StateContext } from "./Context";

const useMyContext = () => useContext(StateContext);

export default useMyContext;
