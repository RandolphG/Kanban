import { v4 as uuid } from "uuid";
import { remove, dragList, editListTitle, addToList } from "./list";
import {
  addListToBoard,
  dragBoard,
  deleteListFromBoard,
} from "../../BoardLayout";

export const addList = (title) => (dispatch, getState) => {
  const board = getState().board;
  const id = uuid();

  dispatch(addToList({ title, board, id }));
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

export const handleEditTitle = ({ listID, listTitle }) => (dispatch) => {
  dispatch(
    editListTitle({
      listID,
      listTitle,
    })
  );
};

export const deleteList = ({ listID }) => (dispatch, getState) => {
  const board = getState().board;

  dispatch(
    remove({
      listID,
    })
  );

  dispatch(deleteListFromBoard({ listID, board }));
};
