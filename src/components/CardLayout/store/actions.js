import { v4 as uuid } from "uuid";
import {
  add,
  onCancel,
  onDelete,
  onEdit,
  onInputChange,
  onSave,
  onTagAdd,
  onTagRemove,
  setAllTags,
} from "./card";
import { addCardToList } from "../../ListLayout/store/list";

export const handleEdit = (key) => async (dispatch) => {
  dispatch(onEdit(key));
};

export const addCard = ({ listID, titleText }) => async (dispatch) => {
  const id = uuid();
  dispatch(add({ listID, titleText, id }));
  dispatch(addCardToList({ listID, id }));
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
