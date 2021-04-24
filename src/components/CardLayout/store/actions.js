import { v4 as uuid } from "uuid";
import {
  addCard,
  onCancel,
  onDelete,
  onEdit,
  onInputChange,
  onSave,
  onTagAdd,
  onTagRemove,
  setAllTags,
} from "./card";

export const handleEdit = (key) => async (dispatch) => {
  dispatch(onEdit(key));
};

export const handleAddCard = (listID, text) => async (dispatch) => {
  const id = uuid();
  dispatch(addCard({ listID, id }));
};

export const handleDelete = (index) => async (dispatch) => {
  dispatch(onDelete(index));
};

export const handleSave = () => async (dispatch) => {
  dispatch(onSave());
};

export const handleCancel = () => async (dispatch) => {
  dispatch(onCancel());
};

export const handleInputChange = (event) => async (dispatch) => {
  dispatch(onInputChange(event));
};

export const handleKeywordAdd = (tags, index) => async (dispatch) => {
  dispatch(onTagAdd({ tags, index }));
};

export const handleTagsRemove = (tags, index) => async (dispatch) => {
  dispatch(onTagRemove({ tags, index }));
};

export const setUniqueTags = (tags) => async (dispatch) => {
  dispatch(setAllTags(tags));
};

/*
export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, id },
  };
};

export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText },
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID },
  };
};
*/
