import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./Slices/paginationSlice";

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

export default store;
