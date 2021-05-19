import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers,
});

export const { setDate } = timeSlice.actions;

export default timeSlice.reducer;
