import { v4 as uuid } from "uuid";

/*
export const CONSTANTS = {
  ADD_CARD: "ADD_CARD",
  ADD_LIST: "ADD_LIST",
  DRAG_HAPPENED: "DRAG_HAPPENED",
  EDIT_CARD: "EDIT_CARD",
  DELETE_CARD: "DELETE_CARD",
  EDIT_LIST_TITLE: "EDIT_LIST_TITLE",
  DELETE_LIST: "DELETE_LIST",
  SET_ACTIVE_BOARD: "SET_ACTIVE_BOARD",
  ADD_BOARD: "ADD_BOARD",
};

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, id },
  };
};
*/
export const {
  deleteCardFromList,
  deleteList,
  dragList,
  editListTitle,
  setAddList,
  addCardToList,
} = listSlice.actions;

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

export const editTitle = (listID, newTitle) => (dispatch) => {
  dispatch(
    editListTitle({
      listID,
      newTitle,
    })
  );
};

export const setDeleteList = (listID) => (dispatch, getState) => {
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
