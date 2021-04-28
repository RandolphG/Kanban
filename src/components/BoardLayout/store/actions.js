import { addListToBoard, addBoardDetails, setActiveBoard } from "./board";

export const handleAddBoard = (title, id) => (dispatch) => {
  dispatch(addBoardDetails({ title, id }));
};

export const handleAddListToBoard = (id) => (dispatch) => {
  dispatch(addListToBoard(id));
};
