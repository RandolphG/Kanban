import { v4 as uuid } from "uuid";
import {
  addCardToList,
  deleteList,
  dragList,
  editListTitle,
  add,
} from "./list";
import { addListToBoard, dragBoard } from "../../BoardLayout";
import { addCard } from "../../../store/actions";

export const addList = (title) => (dispatch, getState) => {
  const board = getState().board;
  const id = uuid();

  dispatch(add({ title, board, id }));
  dispatch(addListToBoard({ board, id }));
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
