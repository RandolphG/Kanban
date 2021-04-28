import { createSelector } from "reselect";

export const getCard = (state) => state.card;
export const getCardDetails = (state) => state.card.cards;
export const getTempInfo = (state) => state.card.tempInfo;
export const getTags = createSelector(getCard, (card) => card.tags);
