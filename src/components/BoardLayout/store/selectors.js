import { createSelector } from "reselect";

export const getBoards = (state) => state.board;
export const getScrollable = createSelector(
  getBoards,
  (board) => board.scrollable
);
