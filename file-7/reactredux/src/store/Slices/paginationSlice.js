import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offset: 0,
  limit: 20,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setOffset, setLimit } = paginationSlice.actions;

export default paginationSlice.reducer;
