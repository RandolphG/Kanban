import { addBoard } from "./dashboard";
import { addBoardDetails } from "../../BoardLayout";

export const handAddBoardToDashboard = (id, title) => (dispatch) => {
  dispatch(addBoardDetails({ title, id }));
  dispatch(addBoard(id));
};
