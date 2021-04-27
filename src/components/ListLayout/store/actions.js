import { v4 as uuid } from "uuid";
import { addCardToList, remove, dragList, editListTitle, add } from "./list";
import {
  addListToBoard,
  deleteListFromBoard,
  dragBoard,
} from "../../BoardLayout";
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

export const handleEditTitle = ({ listID, listTitle }) => (dispatch) => {
  console.log(`handleEditTitle : --->`, listID, listTitle);

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
