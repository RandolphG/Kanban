import { dashboardSlice } from "./dashboard";
import { addBoardDetails } from "../../BoardLayout";

const { addBoard } = dashboardSlice.actions;

export const handAddBoardToDashboard = (id, title) => (dispatch) => {
  console.log(`handAddBoardToDashboard`, id, title);

  dispatch(addBoardDetails({ title, id }));
  dispatch(addBoard(id));
};
