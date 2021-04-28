import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const slice = createSlice({
  name: "card",
  initialState,
  reducers,
});

export const {
  onEdit,
  addToCard,
  onDelete,
  onSave,
  onCancel,
  onInputChange,
  onTagAdd,
  onTagRemove,
  setAllTags,
} = slice.actions;

export default slice.reducer;
