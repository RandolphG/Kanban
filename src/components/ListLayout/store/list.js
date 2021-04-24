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
  deleteList,
  dragList,
  editListTitle,
  setAddList,
  addCardToList,
} = listSlice.actions;
