import { createSelector } from "reselect";

/* get state */
export const getCard = (state) => state.card;
export const getCardDetails = (state) => state.card.cards;
export const getTempInfo = (state) => state.card.tempInfo;
export const getInEditMode = (state) => state.card.inEditMode;
export const getCards = (state) => state.cards;

/*
export const getTags = createSelector(
  getCardInfo,
  (cardInfo) => cardInfo[0].tags
);
*/
