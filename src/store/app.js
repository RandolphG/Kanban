import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const {
  setLogoColor,
  onAddNotification,
  onRemoveNotification,
} = appSlice.actions;

export default appSlice.reducer;
