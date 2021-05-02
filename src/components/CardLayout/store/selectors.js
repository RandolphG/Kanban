import { createSelector } from "reselect";

export const getCard = (state) => state.card;

export const getCardDetails = (state) => state.card.cards;

export const getTempInfo = createSelector(getCard, (card) => card.tempInfo);

export const getTags = createSelector(getCard, (card) => card.tags);

export const getCardInfos = createSelector(getCard, (card) => card.cards);

export const getFilter = createSelector(getCard, (card) => card.filtered);

export const getFilteredCards = createSelector(
  getCard,
  (card) => card.filteredCards
);
