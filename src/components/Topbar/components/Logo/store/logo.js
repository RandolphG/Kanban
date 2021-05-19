import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers,
});

export const { setLogoColor } = logoSlice.actions;

export default logoSlice.reducer;
