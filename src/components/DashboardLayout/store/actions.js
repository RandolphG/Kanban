import { dashboardSlice } from "./dashboard";

const { addBoard } = dashboardSlice.actions;

export const handAddBoardToDashboard = (id) => (dispatch) => {
  console.log(`handAddBoardToDashboard`, id);

  dispatch(addBoard(id));
};
