import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers,
});

export default slice.reducer;
