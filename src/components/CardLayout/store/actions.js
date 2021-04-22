import { slice } from "./card";

const {
  onEdit,
  addCard,
  onDelete,
  onSave,
  onCancel,
  onInputChange,
  onTagAdd,
  onTagRemove,
  setAllTags,
} = slice.actions;

export const handleEdit = (key) => async (dispatch) => {
  dispatch(onEdit(key));
};

export const handleAddCard = () => async (dispatch) => {
  dispatch(addCard());
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
