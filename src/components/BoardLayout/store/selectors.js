import { createSelector } from "reselect";

export const getBoards = (state) => state.board;
export const getFilterPanel = createSelector(
  getBoards,
  (board) => board.filterPanel
);
export const getScrollable = createSelector(
  getBoards,
  (board) => board.scrollable
);
