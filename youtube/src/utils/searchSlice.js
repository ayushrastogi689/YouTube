import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    // Add an action
    cacheResults: (state, action) => {
      state = { ...action.payload, ...state};
    },
  },
})

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducers;
