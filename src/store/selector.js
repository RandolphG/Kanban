import { createSelector } from "reselect";

export const getBoards = (state) => state.boards;

export const getActiveBoard = (state) => state.activeBoard;

export const getLists = (state) => state.lists;

export const getCards = (state) => state.cards;

export const getBoardOrder = (state) => state.boardOrder;
