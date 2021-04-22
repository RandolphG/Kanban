import { createSelector } from "reselect";

/* get state */
export const getState = (state) => state.kanban;
export const getNotifications = (state) => state.kanban.notifications;
export const getCardInfo = (state) => state.kanban.cardInfo;
export const getTempInfo = (state) => state.kanban.tempInfo;
export const getInEditMode = (state) => state.kanban.inEditMode;
export const getLoading = (state) => state.kanban.loading;
export const getTags = createSelector(
  getCardInfo,
  (cardInfo) => cardInfo[0].tags
);
