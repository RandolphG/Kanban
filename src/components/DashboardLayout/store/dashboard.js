import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers,
});

export const { addBoard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
