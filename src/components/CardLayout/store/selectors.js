import { createSelector } from "reselect";

/* get state */
export const getState = (state) => state.card;
export const getCardInfo = (state) => state.card.cardInfo;
export const getTempInfo = (state) => state.card.tempInfo;
export const getInEditMode = (state) => state.card.inEditMode;
export const getLoading = (state) => state.card.loading;
export const getCards = (state) => state.cards;

/*
export const getTags = createSelector(
  getCardInfo,
  (cardInfo) => cardInfo[0].tags
);
*/
