import { reducers } from "./reducers";
import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers,
});

export const {
  dragBoard,
  addBoardDetails,
  addListToBoard,
  setDeleteList,
  setActiveBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
