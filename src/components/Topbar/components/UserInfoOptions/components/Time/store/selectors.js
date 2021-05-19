import { createSelector } from "reselect";

export const getTime = (state) => state.time;

export const getDate = createSelector(getTime, (time) => time.date);
