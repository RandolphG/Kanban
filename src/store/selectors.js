import { createSelector } from "reselect";

export const getApp = (state) => state.app;
export const getNotifications = createSelector(
  getApp,
  (app) => app.notifications
);
