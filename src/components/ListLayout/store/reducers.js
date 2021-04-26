import { current } from "@reduxjs/toolkit";

export const reducers = {
  setAddList: (state, action) => {
    const { title, id, boardID } = action.payload;
    const newList = {
      title: title,
      id: `list-${id}`,
      cards: [],
      board: boardID,
    };

    const newState = { ...state, [`list-${id}`]: newList };

    return newState;
  },
  addCardToList: (state, action) => {
    const { listID, id } = action.payload;
    const newCardID = `card-${id}`;
    const list = state[listID];
    const newCards = [...list.cards, newCardID];
    list.cards = newCards;
  },
  dragList: (state, action) => {
    const { source, destination, type } = action.payload;

    /* dragging lists around - the listOrderReducer should handle this */
    if (type === "list") {
      console.log(`\ntype === "list"`);
      return state;
    }

    /* in the same list */
    if (source.droppableId === destination.droppableId) {
      console.log(`\ndroppableIdStart === droppableIdEnd`);

      const list = state[source.droppableId];
      const card = list.cards.splice(destination.index, 1);
      list.cards.splice(source.index, 0, ...card);
      /*return { ...state, [source.droppableId]: list };*/
    }

    /* other list */
    if (source.droppableId !== destination.droppableId) {
      /* find the list where the drag happened */
      const listStart = state[source.droppableId];

      /* pull out the card from this list*/
      const card = listStart.cards.splice(destination.index, 1);

      /* find the list where the drag ended */
      const listEnd = state[destination.droppableId];

      /* put the card in the new list */
      listEnd.cards.splice(source.index, 0, ...card);
      /*return {
        ...state,
        [source.droppableId]: listStart,
        [destination.droppableId]: listEnd,
      };*/
    }
    return state;
  },
  deleteCardFromList: (state, action) => {
    const { listID, card } = action.payload;
    const newState = state;
    const list = newState[listID];
    const newCards = list.cards.filter((cardID) => cardID !== card.id);

    list.cards = newCards;
  },
  editListTitle: (state, action) => {
    const { listID, newTitle } = action.payload;

    const list = state[listID];
    list.title = newTitle;
    return { ...state, [listID]: list };
  },
  deleteList: (state, action) => {
    const { listID } = action.payload;
    const newState = state;
    delete newState[listID];
    return newState;
  },
};