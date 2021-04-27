import { reducers } from "./reducers";
import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers,
});

export const {
  deleteCardFromList,
  dragList,
  editListTitle,
  add,
  addCardToList,
  remove,
} = listSlice.actions;

export default listSlice.reducer;
