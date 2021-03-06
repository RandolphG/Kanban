import { v4 as uuid } from "uuid";
import {
  addToCard,
  onDelete,
  onInputChange,
  onSave,
  onTagAdd,
  onTagRemove,
  setAllTags,
} from "./card";
import { addCardToList } from "../../ListLayout";

export const addCard = ({ listID, titleText }) => async (dispatch) => {
  const id = uuid();
  dispatch(addToCard({ listID, titleText, id }));
  dispatch(addCardToList({ listID, id }));
};

export const handleDelete = (index) => async (dispatch) => {
  dispatch(onDelete(index));
};

export const handleSave = ({ card }) => async (dispatch) => {
  dispatch(onSave({ card }));
};

export const handleInputChange = (event) => async (dispatch) => {
  dispatch(onInputChange(event));
};

export const handleKeywordAdd = ({ tag, index, card }) => async (dispatch) => {
  dispatch(onTagAdd({ tag, index, card }));
};

export const handleTagsRemove = ({ values, index, card }) => async (
  dispatch
) => {
  dispatch(onTagRemove({ values, index, card }));
};

export const setUniqueTags = (tags) => async (dispatch) => {
  dispatch(setAllTags(tags));
};
