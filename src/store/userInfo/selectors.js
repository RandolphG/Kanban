import { createSelector } from "reselect";

export const getUserState = (state) => state.user;

export const getCurrentLocation = createSelector(
  getUserState,
  (user) => user.currentLocation
);
