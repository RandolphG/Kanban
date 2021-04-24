import { slice } from "./dashboard";

const { addBoard } = slice.actions;

export const handAddBoardToDashboard = (id) => (dispatch) => {
  console.log(`handAddBoardToDashboard`, id);
  dispatch(addBoard({ payload: id }));
};
