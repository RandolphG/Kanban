import { slice } from "./card";

const {
  onEdit,
  addEntry,
  onDelete,
  onSave,
  onCancel,
  onAddNotification,
  onRemoveNotification,
  onSetSortedList,
  onInputChange,
  onTagAdd,
  onTagRemove,
  onToggleControlPanel,
  setAllTags,
} = slice.actions;

export const handleEdit = (key) => async (dispatch) => {
  dispatch(onEdit(key));
};

export const handleAddEntry = () => async (dispatch) => {
  dispatch(addEntry());
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

export const handleNotification = (message) => async (dispatch) => {
  dispatch(onAddNotification(message));
};

export const handleRemoveNotification = () => async (dispatch) => {
  dispatch(onRemoveNotification());
};

export const handleSetSortedList = () => async (dispatch) => {
  dispatch(onSetSortedList());
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

export const toggleControlPanel = () => async (dispatch) => {
  dispatch(onToggleControlPanel());
};

export const setUniqueTags = (tags) => async (dispatch) => {
  dispatch(setAllTags(tags));
};
