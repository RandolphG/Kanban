import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const slice = createSlice({
  name: "card",
  initialState,
  reducers,
});

export default slice.reducer;
