import { v4 as uuid } from "uuid";
import {
  addCardToList,
  deleteList,
  dragList,
  editListTitle,
  setAddList,
} from "./list";
import { addListToBoard, dragBoard } from "../../BoardLayout/store/board";
import { addCard } from "../../../store/actions";

export const addList = (title) => (dispatch, getState) => {
  const boardID = getState().activeBoard;
  const id = uuid();

  dispatch(setAddList({ title, boardID, id }));
  dispatch(addListToBoard({ boardID, id }));
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => (dispatch, getState) => {
  const boardID = getState().activeBoard;
  dispatch(
    dragBoard({
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      boardID,
    })
  );
  dispatch(
    dragList({
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      boardID,
    })
  );
};

export const handleEditTitle = (listID, newTitle) => (dispatch) => {
  dispatch(
    editListTitle({
      listID,
      newTitle,
    })
  );
};

export const handleDeleteList = (listID) => (dispatch, getState) => {
  const boardID = getState().activeBoard;
  dispatch(
    deleteList({
      listID,
      boardID,
    })
  );
};

export const handleAddCardToList = (listID, text) => (dispatch) => {
  const id = uuid();
  dispatch(
    addCardToList({
      text,
      listID,
      id,
    })
  );
  dispatch(
    addCard({
      text,
      listID,
      id,
    })
  );
};
