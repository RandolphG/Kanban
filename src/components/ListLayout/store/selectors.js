import { createSelector } from "reselect";

export const getList = (state) => state.list;

export const listID = createSelector(getList, (list) => list.id);
