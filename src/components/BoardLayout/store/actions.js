import { handAddBoardToDashboard } from "../../DashboardLayout";
import { addListToBoard, setBoardInfo } from "./board";
import { v4 as uuid } from "uuid";

export const handleAddBoard = (title) => (dispatch) => {
  const id = uuid();
  dispatch(setBoardInfo({ title, id }));
  handAddBoardToDashboard(id);
};

export const handleAddListToBoard = (id) => (dispatch) => {
  dispatch(addListToBoard(id));
};
